//1. 取得elements
const player = document.querySelector('.player');
const video = player.querySelector('.viwer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//2. 建立function
function togglePlay(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}


//3. Hook up EventListeners