//--- my logic for playing sound
// finding the audio
const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);
//finding the button
const playButton = document.querySelector("#play-button");
console.log(playButton);
// function for clicking the button and playing audio
playButton.addEventListener("click", playAudio);

function playAudio() {
  airportAudio.play();
}

//---
//function for pausing
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
//finding the pause button
pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
  airportAudio.pause();
}

//pop sound and button found
const popButton = document.querySelector("#pop-button");
console.log(popButton);
const popSound = document.querySelector("#pop-sound");
console.log(popSound);
//function for pop sound

popButton.addEventListener("click", playPop);

function playPop() {
  popSound.play();
}
