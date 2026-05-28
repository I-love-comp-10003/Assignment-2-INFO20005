// Product Cards 

const productData = [
  {
    id: "addictHarness",
    name: "The Addict Harness",
    image: ["image/addictHarness.webp", "image/addictHarness2.webp"],
    price: 64.95,
    collection: "addict",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "addictHarness.html",
  },
  {
    id: "",
    name: "The Addict Waste Bag Holder",
    image: ["image/addictWasteBag.webp", "image/addictWasteBag2.webp"],
    price: 29.95,
    collection: "addict",
    productType: "wastebag",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "The Addict Leash",
    image: ["image/addictLeash.webp", "image/addictLeash2.webp"],
    price: 49.95,
    collection: "addict",
    productType: "leash",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "bonheurSweater",
    name: "Bonheur Turtleneck Sweater",
    image: ["image/bonheurSweater.jpg", "image/bonheurSweater2.jpg"],
    price: 44.95,
    collection: "Bonheur",
    productType: "Sweater",
    sale: true,
    salePrice: 34.95,
    href: "bonheurSweater.html",
  },
  {
    id: "",
    name: "Boucle Sweater",
    image: ["image/boucleTurtleneckSweater.jpg", "image/boucleTurtleneckSweater2.jpg"],
    price: 54.95,
    collection: "",
    productType: "Sweater",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Half Zip Sweater",
    image: ["image/halfZipJumper.jpg", "image/halfZipJumper2.webp"],
    price: 54.95,
    collection: "",
    productType: "Sweater",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "The Dreamer's Harness",
    image: ["image/theDreamers1.jpg", "image/theDreamers2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: true,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Lovers' Picnic",
    image: ["image/loversPicnic1.webp", "image/loversPicnic2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Half Zip Sweater",
    image: ["image/halfZipJumper.jpg", "image/halfZipJumper2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Half Zip Sweater",
    image: ["image/halfZipJumper.jpg", "image/halfZipJumper2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Half Zip Sweater",
    image: ["image/halfZipJumper.jpg", "image/halfZipJumper2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: true,
    salePrice: 43.96,
    href: "",
  },
];

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

// Section cards

const productStyle = [
    {
        name: "Harnesses",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: "harnessProductListing.html"
    },
    {
        name: "Sweaters & Jumpers",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: "sweaterProductListing.html"
    },
    {
        name: "Bandanas",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: ""
        
    },
    {
        name: "Leashes",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: ""
    },
    {
        name: "Collars",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: ""
    },
    {
        name: "Waste Bag Holders",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: ""
    },
    {
        name: "Accessories",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: ""
    },
    {
        name: "For Hoomans",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "productType",
        href: ""
    },
    {
        name: "Addict",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: "addictProductListing.html"
    },
    {
        name: "The Frenchie",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Blooming",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "The Dreamers",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Cavi",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Wanderlust",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Lovers' Picnic",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Joie de Vivre",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Edward",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Truffle  ",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "style",
        href: ""
    },
]

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
        })
        
    
    // puts into localstorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)
};





function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
};

// your cart page

document.addEventListener("DOMContentLoaded", () => {
  makeList(productData);
  makeSection(productStyle);
});


