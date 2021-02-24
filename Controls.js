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
	seekslider.addEventListener("change",vidSeek,true);

    vid.addEventListener("timeupdate",seektimeupdate,false);
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
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	console.log(seekto);
	vid.currentTime = seekto;
}

function seektimeupdate()
{
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
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
