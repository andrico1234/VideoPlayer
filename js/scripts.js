/**
 * Created by Home on 28/04/2016.
 */

var $video = document.getElementById("main-video");
var currentVolume = $video.volume;
var seekSlider = document.getElementById("seek-bar");
var volumeBar = document.getElementById("volume-fader");
$video.addEventListener("timeupdate", seekTimeUpdate, false);
// var subtitles = document.getElementById('subtitles');

// play pause function

function pauseVideo() {
    $video.pause();
    $("#play-button").removeClass("hidden");
    $("#pause-button").addClass("hidden");
    console.log("video paused");
}

function playVideo() {
    $video.play();
    $("#pause-button").removeClass("hidden");
    $("#play-button").addClass("hidden");
    console.log("video played");
}

$("#play-button").click(function () {
    playVideo();
});

$("#pause-button").click(function () {
    pauseVideo();
});

// video seek

function videoSeek() {
    $video.currentTime = $video.duration * (seekSlider.value / 100);
}

function seekTimeUpdate() {
    var newTime = $video.currentTime * (100 / $video.duration);
    seekSlider.value = newTime;
    console.log("real time update");
}

$(seekSlider).change(function () {
    videoSeek();
    console.log("position changed");
});

// volume functions

function volumeToggle() {
    currentVolume = $video.volume; // current volume
    if (currentVolume > 0) {
        $("#volumeOn").removeClass("hidden");
        $("#volumeOff").addClass("hidden");
    } else if (currentVolume == 0) {
        $("#volumeOn").addClass("hidden");
        $("#volumeOff").removeClass("hidden");
    }
}

$("#volumeOn").click(function () {
    console.log("volume off");
    $video.volume = 0;
    volumeToggle();
});

$("#volumeOff").click(function () {
    console.log("volume on");
    $video.volume = 1;
    volumeToggle();
});

// subtitle code

// for (var i = 0; i < $video.textTracks.length; i++) {
//     $video.textTracks[i].mode = 'hidden';
// }

// full screen

var elem = document.getElementById("main-video");

$("#full-screen").click(function () {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
});

