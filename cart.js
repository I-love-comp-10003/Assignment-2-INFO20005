function makeCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart");
  if (!cartContainer) return;

  cart.forEach(item => {

    const card = document.createElement("article");
    card.className = "cartCard";

    card.innerHTML = `
        <img src="${item.image}" style="width: 200px;">

        <div class="cartInfo">
            <h2>${item.name}</h2>
            <p>Size: ${item.size}</p>
            <p>Colour: ${item.style}</p>
            <p>Quantity: ${item.amt}</p>
            <p>$${item.price}</p>
        </div>
        <button class="" onclick="addProduct(-1)">-</button> <p id="value">${item.amt}</p> <button onclick="addProduct(1)">+</button>
    `;

    cartContainer.append(card);
});
};



document.addEventListener("DOMContentLoaded", () => {
  makeCart()
});