//Just to keep things neater I kept all document.queryselector constants here
// elements for the audio player, study timer and mute button
const audioBGM = document.querySelector("#study-bgm-player");
const startStudyBtn = document.querySelector("#start-study");
const timerDisplay = document.querySelector("#timer-display");
const muteBtn = document.querySelector("#mute-button");
const muteImg = document.querySelector("#mute-button-img");
//elements for the goals list
const addGoalBtn = document.querySelector("#add-goal");
const goalsList = document.querySelector("#goals-list");

//I'm choosing to loop the background music since it's just supposed to be ambient sound while you study
//it isn't supposed to end until the 45 min is up
// initialised variables here, muted by default and get rid of the default audio player controls
audioBGM.volume = 0;
audioBGM.controls = false;
audioBGM.loop = true;
// this section is for the timer, I converted the time from minutes to seconds
// i use remainingTime to update the countdown
// the second variable is just for stopping music at 45 min
let remainingTime = 45 * 60; // seconds
let timeRec;

//  Start study: play music (unmute) + start countdown
function startCountdown() {
  //the line below stops there being more than 1 time at one time, it also returns the setInterval value every second (1000 miliseconds)
  if (timeRec) return;
  audioBGM.volume = 1;
  muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";
  audioBGM.play();
  //the line below calls another functionn i wrote to update the time
  updateDisplay(remainingTime);
  //https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
  //setInterval is a function that executes a function after a certain amount of time, i set it to 1000 ms since it's the same as 1 second
  timeRec = setInterval(onTick, 1000);
}

// this function has two main purposes, one is to update the countdown and the ssecond is to
// give the user a pop up once the 45 min are up
function onTick() {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
  // the -- basically deducts 1 value from remaining time
  remainingTime--;
  //this just
  updateDisplay(remainingTime);
  if (remainingTime <= 0) {
    clearInterval(timeRec);
    alert("Time is up! Take a 15-minute break.");
  }
}

function updateDisplay(sec) {
  //Math.floor(sec/60) returns the lowest whole minute just rounds it up with floor
  // sec %60 gives the the remaining seconds
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  //this updates the display timer that we queryselected, it formats the it so that single numbers like 3 become 03
  // this is just to make it look like a digital clock
  timerDisplay.textContent = `${String(m).padStart(2, "0")}:${String(
    s
  ).padStart(2, "0")}`;
}

// this i wrtoe this fucntion to toggle the mute button icon
function toggleMuteUnmute() {
  //if audio is not 0 it means it is on, if it is on the if statement triggers setting the volume to 0 and changing the img to muted icon
  //I will use an event listener to call this function
  if (audioBGM.volume > 0) {
    audioBGM.volume = 0;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    audioBGM.volume = 1;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";
  }
}
//this section is for the goal list, i will trigger it through the add goal button
function addGoal() {
  //this prompts user for text
  const text = prompt("Enter your study goal:");
  //this stops the fucntion if nothing is typed - there's no reason to add no text to a list
  if (!text) return;
  // this makes a new list item - with the prompted text from user
  const li = document.createElement("li");
  li.textContent = text;

  // this adds a button to the list item with the text "complete"
  // i'm adding it so users can remove completed tasks or things they entered by mistake
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Complete";
  //this listens for the button to be clicked
  //i googled how to do this and i followed the top comment on this page https://stackoverflow.com/questions/71808591/how-to-delete-a-list-item-by-using-a-button-in-javascript
  removeBtn.addEventListener("click", function () {
    li.remove();
  });
  // this  line nests the remove button into the list item
  li.appendChild(removeBtn);
  // this line just adds the new list item onto the bottom of the list
  goalsList.appendChild(li);
}
//  even listners to trigger functions from clicking buttons
addGoalBtn.addEventListener("click", addGoal);
startStudyBtn.addEventListener("click", startCountdown);
muteBtn.addEventListener("click", toggleMuteUnmute);
