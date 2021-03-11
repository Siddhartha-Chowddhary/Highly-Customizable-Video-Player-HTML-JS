var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;
let mousedown = false;

function intializePlayer(){
	// Set object references
	vid = document.getElementById("my_video");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	mutebtn = document.getElementById("mutebtn");

	playbtn.addEventListener("click",playPause,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);

	seekslider.addEventListener("input",vidSeek,true);

	mutebtn.addEventListener("click",vidmute,false);

}
window.onload = intializePlayer;
function playPause(){
	if(vid.paused){
		vid.play();
        playbtn.style.background = "url(https://soncur.in/wp-content/uploads/2021/02/pause.svg) no-repeat";
	} else {
		vid.pause();
        playbtn.style.background = "url(https://soncur.in/wp-content/uploads/2021/02/play.svg) no-repeat";
	}
}


function seektimeupdate()
{
	seekslider.value = vid.currentTime;
	seekslider.max = Math.floor(vid.duration);;
}
function vidSeek(){
	vid.currentTime = seekslider.value;
	seekslider.max = Math.floor(vid.duration);;
}
function vidmute(){
	if(vid.muted){
		vid.muted = false;
        mutebtn.style.background = "url(https://soncur.in/wp-content/uploads/2021/02/unmute.svg) no-repeat";
	} else {
		vid.muted = true;
        mutebtn.style.background = "url(https://soncur.in/wp-content/uploads/2021/02/mute.svg) no-repeat";
	}
}
