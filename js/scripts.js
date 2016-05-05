/**
 * Created by Home on 28/04/2016.
 */

var $video = document.getElementById("main-video"), track;
var currentVolume = $video.volume;
var seekSlider = document.getElementById("seek-bar");
var volumeBar = document.getElementById("volume-fader");
var $volumeButton = $('#volume-off-on');
var $playPauseButton = $("#start-stop");
var $fullScreen = $(document.getElementById("full-screen-button"));
var $currentTime = document.getElementById("current-time");
var $durationTime = document.getElementById("duration-time");
var $playbackButton = document.getElementById("playback-speed-button");
var $videoInterface = document.getElementsByClassName("additional-controls");
var speedCounter = 0;
var $captionButton = $(document.getElementById("subtitles"));

$("#play-button").hide();
$("#pause-button").show();
$("#volumeOff").hide();
$("#volumeOn").show();
$("#100-speed").show();
$("#50-speed").hide();
$("#150-speed").hide();


// play pause function

function playPause() {
    if ($video.paused) {
        $video.play();
        $("#play-button").hide();
        $("#pause-button").show();
    } else {
        $video.pause();
        $("#play-button").show();
        $("#pause-button").hide();
    }
}

$playPauseButton.click(function () {
    playPause();
});


// video seek

$(seekSlider).click(function () {
    changeTime();
});

// $(seekSlider).mouseup(function() {
//     changeTime();
// });

function changeTime() {
    $video.currentTime = $video.duration * (seekSlider.value / 100);
    console.log("video changed");
}

// $(function () {
    $(seekSlider).slider({
        // range: "min",
        // value: 0,
        // min: 1,
        // max: 100
    // })
});

$video.addEventListener("timeupdate", function () {

    var newTime = $video.currentTime * (100 / $video.duration);
    seekSlider.value = newTime;

    var currentMinutes = Math.floor($video.currentTime / 60);
    var currentSeconds = Math.floor($video.currentTime - currentMinutes * 60);
    var totalMinutes = Math.floor($video.duration / 60);
    var totalSeconds = Math.floor($video.duration - totalMinutes * 60);
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds;
    }
    var currentTime = currentMinutes + ":" + currentSeconds;
    var totalTime = totalMinutes + ":" + totalSeconds;
    $durationTime.innerHTML = totalTime;
    $currentTime.innerHTML = currentTime;
});

// have the colour of the slider bar change if the ball is past the point of playing
// a few ideas. If the value of the slider is less than the position of the blue, change colour
// use the seekSlider.value and everything less than that changes colour.

// $(seekSlider).mousedown(function () {
//     playPause();
// });
//
// $(seekSlider).mouseup(function () {
//     playPause();
// });

// issue: seekSlider doesn't work when video pauses when bar is clicked.


// volume functions

function volumeToggle() {
    currentVolume = $video.volume;
    if (currentVolume > 0) {
        $video.volume = 0;
        volumeBar.value = 0;
        $("#volumeOff").show();
        $("#volumeOn").hide();
        console.log("sound on");
    } else {
        $video.volume = 1;
        $("#volumeOff").hide();
        $("#volumeOn").show();
        console.log("sound off");
        volumeBar.value = 20;
    }
}

$volumeButton.click(function () {
    volumeToggle();
    console.log("button clicked");
});

function updateVolumeBar() {
    $video.volume = (volumeBar.value / 20);
    console.log("volume bar is changed");
}

// To add - when volumebar val = 0, change image.
// make volume slider appear through hover and change orientation to vertical

$(volumeBar).on("change", function () {
    updateVolumeBar();
});


// Playback speed code

function changeSpeed() {
    if (speedCounter == 0) {
        $("#100-speed").hide();
        $("#50-speed").hide();
        $("#150-speed").show();
        $video.playbackRate = 1.5;
        console.log("fast speed and counter is " + speedCounter);
        speedCounter++;
    } else if (speedCounter == 1) {
        $("#100-speed").hide();
        $("#50-speed").show();
        $("#150-speed").hide();
        console.log("slow speed and counter is " + speedCounter);
        $video.playbackRate = 0.5;
        speedCounter++;
    } else {
        $("#100-speed").show();
        $("#50-speed").hide();
        $("#150-speed").hide();
        console.log("normal speed and counter is " + speedCounter);
        $video.playbackRate = 1;
        speedCounter = 0;
    }
}

$("#playback-speed-button").click(function () {
    changeSpeed();
});
// images by Daan Dirk


// Buffering Code


// Hover Code

$($video).hover(function () {
    $($videoInterface).fadeOut(100);
}, function () {
    $($videoInterface).fadeIn(100);
});
// when mouse leaves div container toolbar disappears, time bar stretches in height.


// Subtitle code
function toggleSubtitles() {
    if ($video.textTracks[0].mode == 'showing') {
        $video.textTracks[0].mode = "hidden";
        console.log("disable subtitles");
    } else {
        $video.textTracks[0].mode = "showing";
        console.log("enable subtitles");
    }
}

// var track = $video.textTracks;
// track.mode = 'hidden';

$captionButton.click(function () {
    toggleSubtitles();
});
// when cc button is pressed when subtitles are enabled
// turn off captions. add a class of hidden?

// when cc is pressed when subtitles are disabled
// turn on captions by removing class


// Full screen

$fullScreen.click(function () {
    if ($video.requestFullscreen) {
        $video.requestFullscreen();
    } else if ($video.mozRequestFullScreen) {
        $video.mozRequestFullScreen(); // Firefox
    } else if ($video.webkitRequestFullscreen) {
        $video.webkitRequestFullscreen(); // Chrome and Safari
    }
    console.log("full screen");
});
// add the toolbar to fullscreen


// Transcript Code
