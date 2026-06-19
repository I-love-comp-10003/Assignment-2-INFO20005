
// product info cards

function makeList(products) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  products.forEach((product, index) => {
    const productArticle = document.createElement("article");
    productArticle.className = "productCard";

    const anchor = document.createElement("a")
    anchor.href = product.href;

    const text = document.createElement("div")
    text.className = "productText"

    const img1 = document.createElement("img");
    img1.src = product.image[0];
    img1.alt = product.name;
    img1.className = "productImage imageA"

    const img2 = document.createElement("img");
    img2.src = product.image[1];
    img2.alt = product.name;
    img2.className = "productImage imageB";

    const title = document.createElement("h4");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.className = "productPrice";
    price.textContent = `$${product.price.toFixed(2)}`;

    const saleBadge = document.createElement("span");
    saleBadge.className = "saleBadge";
    saleBadge.textContent = "Sale";

    const salePrice = document.createElement("p");
    salePrice.className = "salePrice";
    salePrice.textContent = `$${product.salePrice.toFixed(2)}`;


    if (product.collection == container.className || product.productType == container.className) {
      text.append(title, price);
      if (product.sale) {
        if(product.salePrice != 0){
          text.appendChild(salePrice);
          text.appendChild(saleBadge);
        } else {
          saleBadge.textContent = ("Off Sale")
          saleBadge.className = ("offSale")
          text.appendChild(saleBadge);
        }
        price.style = "text-decoration: line-through;"
      }
      
      anchor.append(img1, img2, text);
      productArticle.appendChild(anchor);
      container.appendChild(productArticle);
    }
  });
}


function makeSection(productStyle) {
  const container = document.getElementById("allProducts");
  if (!container) return;

  container.innerHTML = "";

  productStyle.forEach((product, index) => {
    const productArticle = document.createElement("article");
    productArticle.className = "productSection";

    const anchor = document.createElement("a")
    anchor.href = product.href;

    const img1 = document.createElement("img");
    img1.src = product.image[0];
    img1.alt = product.name;
    img1.className = "sectionImage imageA"

    const img2 = document.createElement("img");
    img2.src = product.image[1];
    img2.alt = product.name;
    img2.className = "sectionImage imageB";

    const title = document.createElement("h2");
    title.textContent = product.name;

    const span = document.createElement("span")
    span.textContent = ""
    span.className = "cardLabel"


    if (product.type == container.className) {
      anchor.append(img1, img2, title);
      productArticle.appendChild(anchor)
      container.appendChild(productArticle);
    }
  });
}

// quantity button
function addProduct(n) {
  const number = document.getElementById("value")
  const value = parseFloat(number.textContent)
  const change = value + n
  number.textContent = change
  if (change <= 0){
    number.textContent = 1
  }
}

// add to cart

let cart = []
// first merges the cart in local storage to current array

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
   
    const number = document.getElementById("value")
    const color = document.querySelector('input.color:checked').value 
    const size = document.querySelector('input.size:checked').value 
    const quantity = parseFloat(number.textContent)

     //checks for products already in cart 
    const product = productData.find(p => p.id === productId);
    const cartDuplicate = cart.find(item => item.id === productId &&
        item.size === size &&
        item.style === color
    );

        if (cartDuplicate) {

        cartDuplicate.amt += quantity
        
      } else cart.push({
            id: productId,
            name: product.name,
            image: product.image[0],
            size: size,
            style: color,
            amt: quantity,
            collection: product.collection,
            productType: product.productType,
            price: product.sale 
              ? product.salePrice
              : product.price,
            href: product.href
        })
        
    
    // puts into localstorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)

    // popup notif
    
    const popup = document.createElement('div')
    popup.className ="hidden"
    popup.id = "popup"
    popup.innerHTML =`
    <h2>Added to Cart</h2>
    <img src="${product.image[0]}">
    <p> ${product.name} ${color} <br> 
    Size: ${size} <br> 
    x${quantity} <br>
    <button class="submitB" onclick="window.location.href='cart.html'"> View Cart </button>
    <button onclick="window.location.href='checkout.html'"> To Checkout </button>
    <a class="badge" onclick="hide('popup')">X</a>
    `
    document.body.append(popup)
    popup.classList.toggle("hidden")
};


function hide(name) {
  const popup = document.getElementById(name)
  popup.classList.toggle("hidden")
  document.getElementById("popup")?.remove();
}


function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
};



document.addEventListener("DOMContentLoaded", () => {
  makeList(productData);
  makeSection(productStyle);
});


