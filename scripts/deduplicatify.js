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




// $(function () {

//     // Upon loading, get authentication token!
//     alert("hi");

//     // $("#dedup-btn").on("click", function() {
//     //     var playlist_link = $("#dedup-txtbox").val();

//     //     // alert(playlist_link);

//     //     // Check if playlist is correct $.ajax... etc.
//     // });

// });