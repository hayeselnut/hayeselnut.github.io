const SPOTIFY_CLIENT_ID = "aa601ee4dc62466397f8599de4944648";
const SPOTIFY_CLIENT_SECRET = "75264fdf37ac43bdbbf2de943b7e3667";
const GRANT_TYPE = "client_credentials";

var ACCESS_TOKEN;

$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "https://accounts.spotify.com/api/token",
        data: {"grant_type": GRANT_TYPE},
        headers: {"Authorization": "Basic " + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)},
        success: function(response) {
            ACCESS_TOKEN = response.access_token;
            console.log("Access Token successfully retrieved:", ACCESS_TOKEN);
        },
        error: function() {
            alert("Could not connect to Spotify API");
        }
    });
});

function getPlaylistId(playlistLink) {
    // 2 cases

    if (playlistLink.includes("open.spotify.com/playlist/")) {
        // Playlist Link
        var split = playlistLink.split("/")
        return split[split.length - 1].split("?")[0];
    } else if (playlistLink.includes("spotify:playlist:")) {
        // Spotify URL
        return playlistLink.split(":")[2];
    }
}

function updatePlaylistMetadata(p) {
    // p = playlist_object

    var duration = 500;

    $("#playlist-metadata").fadeOut(duration, function() {
        $("#playlist-name").html(p.name);
        $("#playlist-owner").html(p.owner.display_name);
        $("#playlist-desc").html(p.description);

        if (p.images.length) {
            $("#playlist-img").attr("src", p.images[0].url);
        } else {
            $("#playlist-img").attr("src", "images/blank-playlist.jpg");
        }
    }).fadeIn(duration);
}

$("#dedup-txtbox").on("click", function() {
    $(this).val("");
});

// Consider using change or keydown event
$("#dedup-txtbox").on("change", function() {
    $("#dedup-examples").fadeOut(500).css("display", "none");
    $("#dedup-results").fadeOut(500).css("display", "block").fadeIn(500);

    var playlistLink = $(this).val();
    var playlistId = getPlaylistId(playlistLink);

    // Get playlist metadata and update screen
    $.ajax({
        type: "GET",
        url: "https://api.spotify.com/v1/playlists/" + playlistId,
        headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
        success: updatePlaylistMetadata,
        error: function() {j
            console.log("Invalid Spotify playlist link");
        }
    });

    // Check if playlist is correct $.ajax... etc.
});

function getSongDetails(s) {
    const artists = [];
    s.track.artists.forEach(function(a) {
        artists.push(a.id);
    });

    return {
        "id": s.track.id,
        "name": s.track.name,
        "artists": artists,
        "album": s.track.album.id,
        "album_name": s.track.album.name,
        "duration_ms": s.track.duration_ms,
    };
}

function getSongs(p) {
    const songs = [];

    p.items.forEach(function(s) {
        songs.push(getSongDetails(s));
    })

    return songs;
}

function getTracks(url) {
    return $.ajax({
        type: "GET",
        url: url,
        headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
    });
}

function isSimilarSong(s1, s2) {
    const buzzwords = ["remix", "acoustic", "live"];
    s1.name = s1.name.toLowerCase();
    s2.name = s2.name.toLowerCase();

    // Check song name is similar
    if (!s1.name.includes(s2.name) && !s2.name.includes(s1.name)) {
        return false;
    }

    // Check artist ids
    const intersection = s1.artists.filter(a => s2.artists.includes(a));
    if (!intersection.length) {
        return false;
    }

    // Check if songs are within 10 secs of each other
    if (Math.abs(s1.duration_ms - s2.duration_ms) > 10000) {
        return false;
    }

    // Check not a transformed version of original song
    for (var i = 0; i < buzzwords.length; i++) {
        var bw = buzzwords[i];

        if ( (s1.name.includes(bw) && !s2.name.includes(bw)) || (s2.name.includes(bw) && !s1.name.includes(bw)) ) {
            return false;
        }
    }

    // They are similar!
    return true;
}

function printSong(s) {
    // DEFAULT FOR COMPACT IS 300x80
    var width = 400;
    var height = 80;
    return '<iframe src="https://open.spotify.com/embed/track/' + s.id + '" width="' + width + '" height="' + height + '" frameborder="0" allowtransparency="true" allow="encrypted-media"><i/frame>'
}

$("#dedup-btn").on("click", function() {
    var playlistLink = $("#dedup-txtbox").val();
    var playlistId = getPlaylistId(playlistLink);

    console.log("playlist id:", playlistId);

    $("#sim-songs").empty();

    Promise.coroutine(function*() {
        var p = yield getTracks("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks");
        var songs = getSongs(p);

        while (p.next) {
            p = yield getTracks(p.next);
            songs = songs.concat(getSongs(p));
        }

        console.log("all songs", songs);

        // var songsOutput = "";
        // songs.forEach(function(s, idx) {
        //     songsOutput += printSong(s, idx);
        // });

        // $("#sim-songs").html(songsOutput);

        // Detect common songs
        seen = {};

        for (var i = 0; i < songs.length; i++) {
            if (i in seen) {
                continue;
            }

            const similars = [];

            for (var j = i + 1; j < songs.length; j++) {
                if (isSimilarSong(songs[i], songs[j])) {
                    similars.push(j);
                }
            }

            // If found similars then print them
            if (similars.length) {
                seen[i] = true;

                $("#sim-songs").append(printSong(songs[i]));
                similars.forEach(function(idx) {
                    seen[idx] = true;
                    $("#sim-songs").append(printSong(songs[idx]));
                });
            }
        }

    })();

    // Scroll into view
    $("#dedup-results").scrollIntoView();

});