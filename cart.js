/* Order summary */

function orderSummary() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orderSummary = document.getElementById("orderSummary");
  if (!orderSummary) return;

  orderSummary.innerHTML = "";

  const rightSide =document.createElement("div")
  const leftSide =document.createElement("div")
  rightSide.className = "rightText";
  leftSide.className = "leftText";

  let a = 0

  cart.forEach((item, index, cart) => {
    const itemName = document.createElement("p");
    itemName.className = "itemName";
    itemName.innerHTML = `${item.name} ${item.size} x${item.amt}`;

    const itemPrice = document.createElement("p");
    itemPrice.className = "itemPrice";
    itemPrice.innerHTML = ` $${item.price * item.amt}`;

    const price = parseFloat(item.price * item.amt);
    itemPrice.innerHTML = `$${price.toFixed(2)}`;
    a += price

    leftSide.append(itemName)
    rightSide.append(itemPrice)
  });

  const totalShipping = document.createElement("p");
    totalShipping.className = "Shipping";
    totalShipping.innerText = "Shipping"

  const shipping = document.createElement("p");
    shipping.className = "Shipping";
    shipping.innerText = `$0.00`

  const totalGST = document.createElement("p");
    totalGST.className = "GST";
    totalGST.innerText = "GST"
  const GST = document.createElement("p");
    GST.className = "GST";
    GST.innerText = `$` + (a/10).toFixed(2)

  const totalPrice = document.createElement("p");
    totalPrice.className = "total";
    totalPrice.innerText = "Total"
  const total = document.createElement("p");
    total.className = "total";
    total.innerText = `$` + a.toFixed(2)
  
  leftSide.append(totalShipping, totalGST, totalPrice)
  rightSide.append(shipping, GST, total)
  orderSummary.append(leftSide, rightSide)
}

/* cart cards */

function makeCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart");
  if (!cartContainer) return;

  cart.forEach((item, index, cart) => {

    const card = document.createElement("article");
    card.className = "cartCard";

    card.innerHTML = `
        <h2 style="font-size: 30px; margin-top: 10px;"> ${(index)+ 1} </h2>
        <a href="${item.href}"><img src="${item.image}" style="width: 200px;"></a>

        <div class="cartInfo">
            <h2>${item.name}</h2>
            <p>Size: ${item.size}</p>

          ${item.style ? `<p>Colour: ${item.style}</p>` : ""}
            
            <p class="${item.name}">Quantity: ${item.amt}</p>
            <p>$${(item.price * item.amt).toFixed(2)}</p>
        </div>

        <div class="quantity"> 
          <button onclick="cartButton(${index}, -1)">-</button> 
          <p class="value">${item.amt}</p> 
          <button onclick="cartButton(${index}, 1)">+</button>
        </div>
        <div class="remove"> 
        <button onclick="removeItem(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
<path d="M0.799805 3.63314H2.21647M2.21647 3.63314H13.5498M2.21647 3.63314L2.21647 13.5498C2.21647 13.9255 2.36573 14.2859 2.6314 14.5515C2.89708 14.8172 3.25741 14.9665 3.63314 14.9665H10.7165C11.0922 14.9665 11.4525 14.8172 11.7182 14.5515C11.9839 14.2859 12.1331 13.9255 12.1331 13.5498V3.63314M4.34147 3.63314V2.21647C4.34147 1.84075 4.49073 1.48041 4.7564 1.21474C5.02208 0.94906 5.38241 0.799805 5.75814 0.799805H8.59147C8.9672 0.799805 9.32753 0.94906 9.59321 1.21474C9.85888 1.48041 10.0081 1.84075 10.0081 2.21647V3.63314" stroke="#4D483C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Remove</button>
        </div>
    `;

    cartContainer.append(card);
    const allItems = document.querySelector(".allItems")
    allItems.innerHTML = `(${(cart.length)})`
});
};

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // remove item from array
  cart.splice(index, 1);

  // update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // re-render cart UI
  location.reload();
}

/* quantity buttons */

function cartButton(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].amt = Math.max(1, cart[index].amt + change);

  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("cart").innerHTML = "";
  makeCart();
  orderSummary();
}

function payConfirm() {
  const popup = document.getElementById('purchaseComplete')
  popup.className = "visible" 
}


document.addEventListener("DOMContentLoaded", () => {
  makeCart()
  orderSummary()
});