//function add(v1, v2) {
//  let total = v1 + v2;
//console.log(total);
//  return total;
//}

//function subtract(v1, v2) {
//let t2 = v1 - v2;
//return t2;
//}
//function myGrade(marks) {
// if (marks > 80) {
//  console.log("hd");
//} else if (marks < 40) {
//  console.log("fail");
// } else {
//  console.log("pass");
// }
//}
//let score = 80;
//let msg = myGrade(score);

//let a = 38;
//let b = 31;
//let c = a + b;
//console.log(c);
//let c = add(a, b);
// undefined
//console.log(c);
// can't be be console.log(total) since total is inside the function
//let c = add(a)
//console.log(c) will result in nan since it needs 2 variables
//buh = subtract(a, b);
//console.log(buh);
//const header = document.querySelector("header");
//console.log(header);
//console.log(header.innerHTML);
// let k = "buh";
// header.innerHTML += `"<h2 class= "bluec">this is ${k}</h2>"`;
//header.style.color = "green";

//const allParas = document.querySelectorAll("p");
//console.log(allParas);
//for (let i = 0; i < allParas.length; i++) {
// console.log(allParas[i].textContent);
//allParas[i].style.border = "1px solid green";
//allParas[i].style.backgroundColor = "beige";
// }
//console.log(firstSubhead);
//console.log(topHeading.textContent)
//const topHeading = document.querySelector("h1")
//const myButton= document.querySelector("#my-button");
//console.log(myButton)
//myButton.addEventListener("click", handleClick)
const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}

//function handleClick()
//{
//console.log("buh")
//topHeading.textContent = "this is my new heading";
//myCat.classList.toggle("round");
//}
