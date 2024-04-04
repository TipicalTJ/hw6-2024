var video;

// Creating the loaded information
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	
video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});

// Creating the play button and updating the current volume
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	volumeText = document.querySelector("#slider").value;
	let volumeContent = document.getElementById("volume");
	volumeContent.innerHTML = volumeText + "%";
});

// Creating the pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

// Implementing the slow down and speed up functions
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
})

// Implementing a skip ahead function for the video
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log(video.currentTime);
})

// Creating functionality for Mute button
document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById("mute").innerHTML === "Mute") {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
})

// Volume slider function
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
})

// Implementing functions to add or remove the old school filter
document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").className = "oldSchool";
})

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").className = "video";
})
