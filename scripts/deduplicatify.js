const SPOTIFY_CLIENT_ID = "aa601ee4dc62466397f8599de4944648";
const SPOTIFY_CLIENT_SECRET = "75264fdf37ac43bdbbf2de943b7e3667";
const GRANT_TYPE = "client_credentials";

var access_token;

$.ajax({
    type: "POST",
    url: "https://accounts.spotify.com/api/token",
    data: {"grant_type": GRANT_TYPE},
    headers: {"Authorization": "Basic " + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET)},
    success: function(response) {
        access_token = response.access_token;
    },
    error: function() {
        alert("Could not connect to Spotify API");
    }
});

function extract_playlist_id(playlist_link) {
    // 2 cases

    if (playlist_link.includes("open.spotify.com/playlist/")) {
        // Playlist Link
        var split = playlist_link.split("/")
        return split[split.length - 1];
    } else if (playlist_link.includes("spotify:playlist:")) {
        // Spotify URL
        return playlist_link.split(":")[2];
    }
}

function update_playlist_metadata(name, owner, desc, img) {
    var duration = 500;

    $("#playlist-metadata").fadeOut(duration, function() {
        $("#playlist-name").html(name);
        $("#playlist-owner").html(owner);
        $("#playlist-desc").html(desc);

        if (img != null) {
            $("#playlist-img").attr("src", img[0].url);
        }
    }).fadeIn(duration);

}

// Consider using change or keydown event
$("#dedup-txtbox").on("blur", function() {
    var playlist_link = $(this).val();

    var playlist_id = extract_playlist_id(playlist_link);

    $.ajax({
        type: "GET",
        url: "https://api.spotify.com/v1/playlists/" + playlist_id,
        headers: {"Authorization": "Bearer " + access_token},
        success: function(response) {
            console.log("NAME OF PLAYLIST: " + response.name);
            console.log("OWNER: " + response.owner);
            update_playlist_metadata(response.name, response.owner.display_name, response.description, response.images);
        },
        error: function() {
            alert("Invalid Spotify playlist link");
        }
    });

    // Check if playlist is correct $.ajax... etc.
});

$("#dedup-btn").on("click", function() {
    console.log(access_token);

    var playlist_link = $("#dedup-txtbox").val();

    alert(playlist_link);

    // Check if playlist is correct $.ajax... etc.
});


// $(function () {

//     // Upon loading, get authentication token!
//     alert("hi");

//     // $("#dedup-btn").on("click", function() {
//     //     var playlist_link = $("#dedup-txtbox").val();

//     //     // alert(playlist_link);

//     //     // Check if playlist is correct $.ajax... etc.
//     // });

// });