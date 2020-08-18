const SPOTIFY_CLIENT_ID = "aa601ee4dc62466397f8599de4944648";
const SPOTIFY_CLIENT_SECRET = "75264fdf37ac43bdbbf2de943b7e3667";
const GRANT_TYPE = "client_credentials";

var ACCESS_TOKEN;

$.ajax({
    type: "POST",
    url: "https://accounts.spotify.com/api/token",
    data: {"grant_type": GRANT_TYPE},
    headers: {"Authorization": "Basic " + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)},
    success: function(response) {
        ACCESS_TOKEN = response.access_token;
    },
    error: function() {
        alert("Could not connect to Spotify API");
    }
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

function updatePlaylistMetadata(name, owner, desc, img) {
    var duration = 500;

    $("#playlist-metadata").fadeOut(duration, function() {
        $("#playlist-name").html(name);
        $("#playlist-owner").html(owner);
        $("#playlist-desc").html(desc);

        if (img.length != 0) {
            $("#playlist-img").attr("src", img[0].url);
        } else {
            $("#playlist-img").attr("src", "images/blank-playlist.jpg");
        }
    }).fadeIn(duration);

}

// Consider using change or keydown event
// $("#dedup-txtbox").on("blur", function() {
//     var playlistLink = $(this).val();

//     var playlistId = getPlaylistId(playlistLink);

//     $.ajax({
//         type: "GET",
//         url: "https://api.spotify.com/v1/playlists/" + playlistId,
//         headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
//         success: function(p) {
//             updatePlaylistMetadata(p.name, p.owner.display_name, p.description, p.images);
//         },
//         error: function() {
//             console.log("Invalid Spotify playlist link");
//         }
//     });

//     // Check if playlist is correct $.ajax... etc.
// });

// function getSongs(p) {
//     const songs = [];

//     console.log("p.items");
//     console.log(p.items);

//     p.items.forEach(function (s) {
//         const artists = [];
//         s.track.artists.forEach(function (a) {
//             artists.push(a.id);
//         })

//         songs.push({
//             "id": s.track.id,
//             "name": s.track.name,
//             "artists": artists,
//             "album": s.track.album.id,
//             "album_name": s.track.album.name,
//             "duration_ms": s.track.duration_ms,
//         });
//     })

//     if (!p.next) {
//         return songs;
//     }

//     $.ajax({
//         type: "GET",
//         url: p.next,
//         async: false,
//         headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
//         success: function(playlistObject) {
//             return songs.concat(getSongs(playlistObject));
//         },
//         error: function() {
//             console.log("couldn't load" + p.next);
//             return songs;
//         }
//     });

// }

// $("#dedup-btn").on("click", function() {
//     var playlistLink = $("#dedup-txtbox").val();
//     var playlistId = getPlaylistId(playlistLink);

//     console.log(playlistId);
//     $.ajax({
//         type: "GET",
//         url: "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks",
//         async: false,
//         headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
//         success: function(playlistObject) {
//             console.log(getSongs(playlistObject));
//         },
//         error: function() {
//             console.log("button failed");
//         }
//     });

function getSongs(p) {
    const songs = [];

    console.log("p.items");
    console.log(p.items);

    p.items.forEach(function (s) {
        const artists = [];
        s.track.artists.forEach(function (a) {
            artists.push(a.id);
        });

        songs.push({
            "id": s.track.id,
            "name": s.track.name,
            "artists": artists,
            "album": s.track.album.id,
            "album_name": s.track.album.name,
            "duration_ms": s.track.duration_ms,
        });
    });

    if (p.next) {
        $.when(getTracks(p.next)).then(function successHandler(playlistObject){
            songs.concat(getSongs(playlistObject));
            return songs;
        }, function errorHandler() {
            console.log("error");
        });
    } else {
        return songs;
    }

}

function getTracks(url) {
    return $.ajax({
        type: "GET",
        url: url,
        headers: {"Authorization": "Bearer " + ACCESS_TOKEN},
    });
}

$("#dedup-btn").on("click", function() {
    var playlistLink = $("#dedup-txtbox").val();
    var playlistId = getPlaylistId(playlistLink);
    var url = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks";

    console.log(playlistId);

    $.when(getTracks(url)).then(function successHandler(playlistObject){
        console.log("ALL SONGS", getSongs(playlistObject));
    }, function errorHandler() {
        console.log("error");
    });
});

/*

function testAjax(handleData) {
  $.ajax({
    url:"getvalue.php",
    success:function(data) {
      handleData(data);
    }
  });
}
Call it like this:

testAjax(function(output){
  // here you use the output
});
// Note: the call won't wait for the result,
// so it will continue with the code here while waiting.

*/


// $(function () {

//     // Upon loading, get authentication token!
//     alert("hi");

//     // $("#dedup-btn").on("click", function() {
//     //     var playlistLink = $("#dedup-txtbox").val();

//     //     // alert(playlistLink);

//     //     // Check if playlist is correct $.ajax... etc.
//     // });

// });