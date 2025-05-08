const drawerButton = document.querySelector("#drawer-button");
const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);

const myDuck = document.querySelector("#my-duck");
addEventListener("click" moveDuck());
//function moveDuck(){
//if (click);
  //  myDuck.style.translate = "10px 10px";
//}


let isOpen = false;
drawerButton.addEventListener("click", openDrawer);

function openDrawer() {
  console.log("i am clicked");
  if (!isOpen) {
    // sideDrawer.style.transform = `translateX(200px)`;
    sideDrawer.style.translate = "200px";
    isOpen = true;
  } else {
    sideDrawer.style.translate = "-200px";
    // sideDrawer.style.transform = `translateX(-200px)`;
    isOpen = false;
  }
}
