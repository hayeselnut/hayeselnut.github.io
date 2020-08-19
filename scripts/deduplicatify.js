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
        $("#playlist-length").html(p.tracks.total + " songs");

        if (p.images.length) {
            $("#playlist-img").attr("src", p.images[0].url);
        } else {
            $("#playlist-img").attr("src", "assets//deduplicatify/blank-playlist.jpg");
        }
    }).fadeIn(duration, function() {
        $("#sim-songs").fadeIn(duration);
    });
}

$("#dedup-txtbox").on("click", function() {
    $(this).val("");
});

function getSongDetails(song) {
    const artists = [];
    const artist_names = [];
    song.track.artists.forEach(function(artist) {
        artists.push(artist.id);
        artist_names.push(artist.name);
    });

    return {
        "id": song.track.id,
        "name": song.track.name,
        "artists": artists,
        "artist_names": artist_names,
        "duration_ms": song.track.duration_ms,
    };
}

function getSongs(playlist) {
    const songs = [];

    playlist.items.forEach(function(song) {
        if (song.track) {
            songs.push(getSongDetails(song));
        }
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

function isSimilarSong(song1, song2) {
    const buzzwords = ["mix", "acoustic", "live"];
    var s1 = song1.name.toLowerCase();
    var s2 = song2.name.toLowerCase();

    // Check song name is similar
    if (s1.length <= 2 || s2.length <= 2) {
        // Special case for small song names
        if (s1 != s2) {
            return false;
        }
    } else {
        if (!s1.includes(s2) && !s2.includes(s1)) {
            return false;
        }
    }

    // Check artist ids
    const intersection = song1.artists.filter(a => song2.artists.includes(a));
    if (!intersection.length) {
        return false;
    }

    // Check if songs are within 3 secs of each other
    if (Math.abs(song1.duration_ms - song2.duration_ms) > 3000) {
        return false;
    }

    // Check not a transformed version of original song
    for (var i = 0; i < buzzwords.length; i++) {
        var bw = buzzwords[i];

        if ( (s1.includes(bw) && !s2.includes(bw)) || (s2.includes(bw) && !s1.includes(bw)) ) {
            return false;
        }
    }

    // They are similar!
    console.log(Math.abs(song1.duration_ms - song2.duration_ms));
    return true;
}

function printSong(song) {
    // DEFAULT FOR COMPACT IS 300x80
    var width = 300;
    var height = 80;
    return `<iframe src="https://open.spotify.com/embed/track/${song.id}" width=${width} height=${height} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
}

function getDuplicates(songs) {
    const duplicates = [];
    const seen = {};

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
            similars.push(i);
            duplicates.push(similars);

            similars.forEach(function(idx) {
                seen[idx] = true;
            });
        }
    }

    return duplicates;
}

function showPlaylist(playlistId) {
    $.ajax({
        type: "GET",
        url: "https://api.spotify.com/v1/playlists/" + playlistId,
        headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
        success: updatePlaylistMetadata,
        error: function() {
            console.log("Invalid Spotify playlist link");
        }
    });
}

function showDuplicates(songs, duplicates) {
    duplicates.forEach(function(setOfDuplicates) {
        var songDetails = songs[setOfDuplicates[0]];
        var name = songDetails.name;
        var artists = songDetails.artist_names;

        for (var i = 1; i < setOfDuplicates.length; i++) {
            songDetails = songs[setOfDuplicates[i]];

            if (name.includes(songDetails.name) && !songDetails.name.includes(name)) {
                // New name is shorter than current name, and we want the shortest name
                name = songDetails.name;
            }

            artists = artists.filter(a => songDetails.artist_names.includes(a));
        }
        $("#sim-songs").append(`<h2><strong>${name}</strong> by ${artists.join(", ")}</h2>`);

        var appendSetOfDupes = '<div class="set-of-dupes">';
        setOfDuplicates.forEach(function(dupeId) {
            appendSetOfDupes += printSong(songs[dupeId]);
        });
        appendSetOfDupes += "</div>";
        $("#sim-songs").append(appendSetOfDupes);

        // THIS DOESNT WORK? IT DOES <DIV></DIV><IFRAME></IFRAME>
        // $("#sim-songs").append('<div class="set-of-dupes">');
        // setOfDuplicates.forEach(function(dupeId) {
        //     $("#sim-songs").append(printSong(songs[dupeId]));
        // });
        // $("#sim-songs").append("</div>");

    });
}

$("#dedup-btn").on("click", async function() {
    $("#dedup-results").css("visibility", "visible");
    $("#sim-songs").css("display", "none");
    $("#sim-songs").html("Loading...");

    var playlistLink = $("#dedup-txtbox").val();
    var playlistId = getPlaylistId(playlistLink);
    console.log("playlist id:", playlistId);

    showPlaylist(playlistId);

    // Get songs from playlist
    var p = await getTracks("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks");
    var songs = getSongs(p);

    while (p.next) {
        p = await getTracks(p.next);
        songs = songs.concat(getSongs(p));
    }

    console.log("all songs", songs);

    // Detect common songs
    duplicates = getDuplicates(songs);

    if (!Object.keys(duplicates).length) {
        // No duplicates found
        $("#sim-songs").html("No duplicates found!");
    } else {
        $("#sim-songs").empty();
    }

    // Show duplicates
    showDuplicates(songs, duplicates);

    // Scroll into view
    $("#dedup-results").scrollIntoView();

});