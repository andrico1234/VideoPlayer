/**
 * Created by Home on 28/04/2016.
 */

video = document.getElementById("main-video");
currentVolume = video.volume;

// play pause function

function pauseVideo() {
    video.pause();
    $("#play-button").removeClass("hidden");
    $("#pause-button").addClass("hidden");
    console.log("video paused");
}

function playVideo() {
    video.play();
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

// volume functions

function volumeToggle() {
    currentVolume = video.volume; // current volume
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
    video.volume = 0;
    volumeToggle();
});

$("#volumeOff").click(function () {
    console.log("volume on");
    video.volume = 1;
    volumeToggle();
});


// toggle volume
// when volume is 0 hide volume on button
// when volume is > 0 hide volume off button
// get current video.volume. set it to currentVolume
//

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