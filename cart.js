function orderSummary() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orderSummary = document.getElementById("orderSummary");
  if (!orderSummary) return;

  let a = 0
  cart.forEach((item, index, cart) => {
    const itemName = document.createElement("p");
    itemName.className = "itemName";
    itemName.innerHTML = `${item.name}`;

    const itemPrice = document.createElement("p");
    itemPrice.className = "itemPrice";
    itemPrice.innerHTML = `$${item.price.toFixed(2)}`;

    const price = parseFloat(item.price);
    a += price
    console.log(a)

    orderSummary.append(itemName, itemPrice)
  });

  const totalShipping = document.createElement("p");
    totalShipping.className = "Shipping";
    totalShipping.innerText = "Shipping"
  const shipping = document.createElement("p");
    shipping.className = "Shipping";
    shipping.innerText = `$0.00`


  const totalPrice = document.createElement("p");
    totalPrice.className = "total";
    totalPrice.innerText = "Total"
  const total = document.createElement("p");
    total.className = "total";
    total.innerText = `$` + a.toFixed(2)
  orderSummary.append(totalShipping, shipping, totalPrice, total)
}

function cartButton() {
  
}

function makeCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart");
  if (!cartContainer) return;

  cart.forEach((item, index, cart) => {

    const card = document.createElement("article");
    card.className = "cartCard";

    card.innerHTML = `
        <p> ${(item, index)+ 1} </p>
        <img src="${item.image}" style="width: 200px;">

        <div class="cartInfo">
            <h2>${item.name}</h2>
            <p>Size: ${item.size}</p>
            <p>Colour: ${item.style}</p>
            <p>Quantity: ${item.amt}</p>
            <p>$${item.price}</p>
        </div>
        <div id="quantity" class="cartButton" > <button onclick="addProduct(-1)">-</button> <p id="value">${item.amt}</p> <button onclick="addProduct(1)">+</button></div>
    `;

    cartContainer.append(card);
});
};



document.addEventListener("DOMContentLoaded", () => {
  makeCart()
  orderSummary()
});