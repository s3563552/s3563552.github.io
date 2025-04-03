let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "Shades", price: 200 },
];

const totalMsg = document.querySelector("#total");
const discountMsg = document.querySelector("#discount");

// method 1: using for loop
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total = total + shoppingCart[i].price;
  }
  console.log(total);
  //totalMsg.innerHTML = `${total}`;
  let discount = 0.1;
  let discountedPrice = 0;
  if (total > 100) {
    discountedPrice = total - total * discount;
  }
  console.log(discountedPrice);
  discountMsg.innerHTML = `${discountedPrice}`;
}
