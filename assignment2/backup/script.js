//I was having some serious issue when I was trying to implement my js.script, I had a feeling that the audio file
//was loading slower than than everything else. So i googled the problem and I found this https://dev.to/obere4u/domcontentloaded-vs-windowonload-9mc
//I followed the suggestion to place the script within window.onload so that it would wait for audio to load in before executing code
//window.onload = function () {
//turns out i just had a typo in my code so i commented it out
// elements for the audio player, study timer and mute button
const audioBGM = document.querySelector("#study-bgm-player");
const startStudyBtn = document.querySelector("#start-study");
const timerDisplay = document.querySelector("#timer-display");
const muteBtn = document.querySelector("#mute-button");
const muteImg = document.querySelector("#mute-button-img");
//elements for the goals list
const addGoalBtn = document.querySelector("#add-goal");
const goalsList = document.querySelector("#goals-list");

//an alert to ask the user to resize window, i'm going to style the page so that there's some scaling - instead of the static original container.
//alert("Please resize the window");
// initialised variables here, muted by default and get rid of the default audio player controls
audioBGM.volume = 0;
audioBGM.controls = false;

// this section is for the timer, I converted the time from minutes to seconds
// the second variable is just for
let remainingTime = 45 * 60; // seconds
let timeRec;

// 4a. Start study: play music (unmute) + kick off timer
function startCountdown() {
  if (timeRec) return; // don’t restart
  audioBGM.volume = 1; // unmute
  muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";

  audioBGM.play().catch(console.error);
  updateDisplay(remainingTime);
  timeRec = setInterval(onTick, 1000);
}

// 4b. Time
function onTick() {
  remainingTime--;
  updateDisplay(remainingTime);
  if (remainingTime <= 0) {
    clearInterval(timeRec);
    alert("Time is up! Take a 15-minute break.");
  }
}

// 4c. Render mm:ss
function updateDisplay(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  timerDisplay.textContent = `${String(m).padStart(2, "0")}:${String(
    s
  ).padStart(2, "0")}`;
}

// 5. Mute toggle
function toggleMuteUnmute() {
  if (audioBGM.volume > 0) {
    audioBGM.volume = 0;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    audioBGM.volume = 1;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";
  }
}

function addGoal() {
  const text = prompt("Enter your study goal:");
  if (!text) return; // nothing entered

  const li = document.createElement("li");
  li.textContent = text;

  // Create and wire up the remove‐goal button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Complete";
  removeBtn.addEventListener("click", () => li.remove());

  // Append the remove button and the new item
  li.appendChild(removeBtn);
  goalsList.appendChild(li);
}
addGoalBtn.addEventListener("click", addGoal);
startStudyBtn.addEventListener("click", startCountdown);
muteBtn.addEventListener("click", toggleMuteUnmute);
//};
