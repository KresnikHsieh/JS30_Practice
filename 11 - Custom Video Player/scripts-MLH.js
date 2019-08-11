//1. 取得elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//2. 建立function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  console.log('Update the button');
}

function skip(){
  // console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  video[this.name] = this.value;
  // console.log(this.name);
  // console.log(this.value);
}

function handleProgress(){
  const percent = (video.currentTime / video.duration)*100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
  video.currentTime = scrubTime;
  // console.log(e);
}

//3. Hook up EventListeners
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

video.addEventListener('timeupdate',handleProgress); //監聽timeupdate事件 啟用handleProgress函數
toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));


let mousedown = false; //set一個flag讓滑鼠按下後才驅動事件
progress.addEventListener('click',scrub);
// progress.addEventListener('mousemove',() => {
//   if(mousedown){
//     scrub();
//   }
// });
//以下等圖
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
//先檢查mousedown是否為true，如為true則啟用scrub()函式;
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);




