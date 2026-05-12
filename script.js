// Product Cards 

const productData = [
  {
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
    name: "Bonheur Turtleneck Sweater",
    image: ["image/bonheurSweater.jpg", "image/bonheurSweater2.jpg"],
    price: 44.95,
    collection: "",
    productType: "Sweater",
    sale: false,
    salePrice: 0,
    href: "bonheurSweater.html",
  },
  {
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
    name: "The Dreamer's Harness",
    image: ["image/theDreamers1.jpg", "image/theDreamers2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
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

// 

function makeList(products) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  products.forEach((product, index) => {
    const productArticle = document.createElement("article");
    productArticle.className = "productCard";

    const anchor = document.createElement("a")
    anchor.href = product.href;

    const img1 = document.createElement("img");
    img1.src = product.image[0];
    img1.alt = product.name;
    img1.className = "productImage";
    img1.id = "imageA"

    const img2 = document.createElement("img");
    img2.src = product.image[1];
    img2.alt = product.name;
    img2.className = "productImage";
    img2.id = "imageB"
    img2.style = "display: none;"

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
      anchor.append(img1, img2, title, price);
      if (product.sale) {
        anchor.appendChild(saleBadge);
        anchor.appendChild(salePrice);
      }
      productArticle.appendChild(anchor)
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
    img1.className = "sectionImage";
    img1.id = "imageA"

    const img2 = document.createElement("img");
    img2.src = product.image[1];
    img2.alt = product.name;
    img2.className = "sectionImage";
    img2.id = "imageB"
    img2.style = "display: none;"

    const title = document.createElement("h2");
    title.textContent = product.name;


    if (product.type == container.className) {
      anchor.append(img1, img2, title);
      productArticle.appendChild(anchor)
      container.appendChild(productArticle);
    }
  });
}



document.addEventListener("DOMContentLoaded", () => {
  makeList(productData);
  makeSection(productStyle);
});


