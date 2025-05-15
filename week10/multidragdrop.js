const myCards = [
    {id:1, name: "Queen", src:"queen.jpg"};,
    {id:2, name: "Jack", src:"jack.jpg"};,
    {id:3, name: "King", src:"king.jpg"};,
]
let cardComposition = "";

for (let i = 0; i < myCards.length; i++) {
cardComposition += `
    <div class="card-container">
        <div class="card" draggable="true">
          <div class="card-face"><img src="cloud.png" alt="Back" /></div>
          <div class="card-face flip">
            <img src="${myCards[i].src}" alt="${myCards[i].name}" class="card-front" />
          </div>
        </div>
      </div>
`;
}
for (let i = 0; i < cardComposition.length; i++){
draggedCard= cards[i];
const name = draggedCard.querySelector(".card-front")
}


const 

function shuffleArray(array) {
    const arr = [...array];
    const j = Math.floor(Math.random)
}