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

        if (p.images.length != 0) {
            $("#playlist-img").attr("src", p.images[0].url);
        } else {
            $("#playlist-img").attr("src", "images/blank-playlist.jpg");
        }
    }).fadeIn(duration);
}

// Consider using change or keydown event
$("#dedup-txtbox").on("blur", function() {
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

function getSongs(p) {
    const songs = [];

    p.items.forEach(function (s) {
        const artists = [];
        s.track.artists.forEach(function (a) {
            artists.push(a.id);
        })

        songs.push({
            "id": s.track.id,
            "name": s.track.name,
            "artists": artists,
            "album": s.track.album.id,
            "album_name": s.track.album.name,
            "duration_ms": s.track.duration_ms,
        });
    })

    return songs;
}
$("#dedup-btn").on("click", function() {
    var playlistLink = $("#dedup-txtbox").val();
    var playlistId = getPlaylistId(playlistLink);

    console.log("playlist id:", playlistId);

    var songs;

    Promise.coroutine(function*() {
        var p = yield $.ajax({
            type: "GET",
            url: "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks",
            headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
        });

        songs = getSongs(p);

        while (p.next) {
            p = yield $.ajax({
                type: "GET",
                url: p.next,
                headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
            });

            songs = songs.concat(getSongs(p));
        }

        console.log("all songs", songs);

        // if next page exists, yield until next page does not exist
    })();
    console.log("all songs outside of promise.corouitne", songs);

});