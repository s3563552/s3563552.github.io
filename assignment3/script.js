//Variable to track which croc is active from 0-4, it's needed for the function that thecks for the croc similar to the dragon check you sent me.
let activeCroc = null;
let score = 0;
let lives = 3;
let gameOver = false;

const resetBtn = document.querySelector("#resetBtn");
const msgContainer = document.querySelector("#msg");
const scoreDisplay = document.querySelector("#score");
const livesDisplay = document.querySelector("#lives");
//declaring audio here so i don't need to put it into html and remove the players etc, works as long as it's in the same folder as the html file
const music = new Audio("music.mp3");
const ow1 = new Audio("ow1.wav");
const ow2 = new Audio("ow2.wav");
//loops the music
music.loop = true;
const startBtn = document.querySelector("#startBtn");
const howTo = document.querySelector("#howTo");

let round = null;
//Added a start button that disappears after it's clicked, it starts both the music and the game.
startBtn.addEventListener("click", () => {
  //Begin playing music (this is a user gesture)
  music.currentTime = 0;
  music.play().catch(() => {
    // ignore if still blocked
  });
  //this starts the game that only ends when the players lives run out, it's similar to the dragon code you sent me but it's goes twice as fast.
  round = setInterval(showRandomCroc, 1500);
  //Start (or resume) your game loop
  startBtn.style.display = "none";
  howTo.style.display = "none";
});
//this is for when the player takes dmg
function loseLife() {
  // Play damage sound here, and also takes current lives and removes 1 using "--"
  lives--;
  livesDisplay.textContent = lives;
  msgContainer.textContent = "You got bit!";
  ow1.play();
  // ends the game if the amount of lives <= 0, had to do this because it would keep going if it was only =
  if (lives <= 0) {
    msgContainer.textContent = "Game Over!";
    gameOver = true;
    clearInterval(round);
    //rReveal the reset buttona and ppause the music
    resetBtn.style.display = "inline-block";
    music.pause();
    music.currentTime = 0;
  }
}
//same style of function from the dragon example, i changed it since i didn't label the crocs as 1-5 -i used 0-4
function getRandomCroc() {
  return Math.floor(Math.random() * 5);
}
//simlar to the show dragon funcction, this
function showRandomCroc() {
  if (gameOver) return;

  //Hide the previous croc
  if (activeCroc !== null) {
    const prev = document.querySelector("#c" + activeCroc);
    prev.style.opacity = "0";
    prev.style.top = "50px";
    activeCroc = null;
  }
  //similar to the getRandomDragon function
  const id = getRandomCroc();
  const croc = document.querySelector("#c" + id);
  activeCroc = id;
  croc.style.opacity = "1";
  //start position of the croc
  croc.style.top = "50px";

  //Animate moving down after a slight delay (trigger transition)
  setTimeout(() => {
    //moves the croc down
    croc.style.top = "220px";
    //start frame-by-frame collision check, it's frame by frame because i swapped to requestanimationframe insetaed
    monitorCroc(croc, id);
  }, 50);
}
// Dragon never did a frame-by-frame overlap check; it simply hid after a fixed timeout.
// I need to detect the exact moment my croc reaches the red line since my game has lives, so I do this:
function monitorCroc(croc, id) {
  function checkPosition() {
    if (activeCroc !== id || gameOver) return;

    const redLine = document.querySelector("#red");
    //Here I had to google how to get the position of an object in the viewport (visible area on screen). https://stackoverflow.com/questions/1960082/position-of-div-in-relation-to-the-top-of-the-viewport
    const redBox = redLine.getBoundingClientRect();
    const crocBox = croc.getBoundingClientRect();

    if (crocBox.bottom >= redBox.top) {
      loseLife();
      croc.style.opacity = "0";
      croc.style.top = "50px";
      activeCroc = null;
      return;
    }
    //While I was experimenting with how fast i wanted to crocs to move set interval stopped working because changing the speed meant that it wasn't checking at the right time, i googled for alternatives and found requestanimationframe.
    //I didn't really understand the w3 webpage explanation so i kept googling and this is what explained it better.https://stackoverflow.com/questions/38709923/why-is-requestanimationframe-better-than-setinterval-or-settimeout
    //instead of checking at a time, it checks at each frame for the browser. This means that I can keep changing the speed etc and it will still work so i went with this.
    requestAnimationFrame(checkPosition);
  }

  requestAnimationFrame(checkPosition);
}
//similar to the whack(id) this also checks for overlap and hides the croc
function whackCroc(e) {
  if (gameOver) return;

  const crocEl = e.currentTarget;
  const id = parseInt(crocEl.id.replace("c", ""));
  //this is where it checks for if the user clicks the dragon
  if (id === activeCroc) {
    score++;
    scoreDisplay.textContent = score;
    // Add animation crock when clicked
    crocEl.classList.add("whack");
    setTimeout(() => crocEl.classList.remove("whack"), 300); // remove after animation
    //
    crocEl.style.opacity = "0";
    crocEl.style.top = "50px";
    msgContainer.textContent = "Nice hit!";
    activeCroc = null;
    // Play ow sound for hitting croch
    ow2.play(); // Play hit sound here
  } else {
    msgContainer.textContent = "Click the crocks!";
  }
}

//Add event listeners to crocs
document.getElementById("c0").addEventListener("click", whackCroc);
document.getElementById("c1").addEventListener("click", whackCroc);
document.getElementById("c2").addEventListener("click", whackCroc);
document.getElementById("c3").addEventListener("click", whackCroc);
document.getElementById("c4").addEventListener("click", whackCroc);
//function to reset the game when the reset button is clicked, triggered by the below eventlistern for click.
function resetGame() {
  score = 0;
  lives = 3;
  gameOver = false;
  //no active croc until game starts and game info is reset
  activeCroc = null;

  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
  msgContainer.textContent = "";
  resetBtn.style.display = "none";

  //Hide all crocs
  document.querySelectorAll(".croc").forEach((croc) => {
    croc.style.opacity = "0";
    croc.style.top = "50px";
  });

  //Restart game/round loop
  //stop the old interval just in case
  clearInterval(round);
  round = setInterval(showRandomCroc, 1500);
  //Resets the muisoic
  music.currentTime = 0;
  music.play();
}

//Start the game loop
resetBtn.addEventListener("click", resetGame);
