const card = document.querySelector(".card");

card.addEventListener("mouseenter", flipMe);
function flipMe() {
  card.classList.add("flip");
}

card.addEventListener("mouseleave", flipMeBack);
function flipMeBack() {
  card.classList.remove("flip");
}
/*
card.addEventListener('click', function)
*/
