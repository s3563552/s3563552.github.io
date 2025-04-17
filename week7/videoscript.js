//searching for variables
const myVid = document.querySelector("#my-vid");
console.log(myVid);
const pauseVid = document.querySelector("#pause-button");
console.log(pauseVid);
const playVid = document.querySelector("#play-button");
console.log(playVid);
// function for clicking the button and playing audio
playVid.addEventListener("click", playVideo);

function playVideo() {
  myVid.play();
}
pauseVid.addEventListener("click", pauseVideo);

function pauseVideo() {
  myVid.pause();
}
