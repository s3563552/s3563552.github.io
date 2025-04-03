function checkWeather() {
  let body = document.querySelector("body");
  console.log("I am just being clicked");
  let outer = document.querySelector(".outer");
  let myInput = document.querySelector("#myTemp");
  let temp = myInput.value;
  console.log("current temp is", temp);
  if (temp >= 20 && temp < 30) {
    body.style.backgroundColor = "orange";
    outer.style.backgroundColor = "grey";
    console.log("warm");
  } else if (temp >= 10 && temp < 20) {
    body.style.backgroundColor = "lightblue";
    outer.style.backgroundColor = "grey";
    console.log("cold");
  } else if (temp >= 30) {
    body.style.backgroundColor = "crimson";
    outer.style.backgroundColor = "grey";
    console.log("hot");
  } else if (temp < 10) {
    body.style.backgroundColor = "gray";
    outer.style.backgroundColor = "grey";
    console.log("cold af");
  }
}
