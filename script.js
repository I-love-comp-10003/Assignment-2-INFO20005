const productData = [
  {
    name: "The Addict Harness",
    image: ["image/addictHarness.webp", "image/addictHarness2.webp"],
    price: 64.95,
    collection: "addict",
    productType: "harness",
    sale: false,
    salePrice: 0,
  },
  {
    name: "The Addict Waste Bag Holder",
    image: ["image/addictWasteBag.webp", "image/addictWasteBag2.webp"],
    price: 29.95,
    collection: "addict",
    productType: "wastebag",
    sale: false,
    salePrice: 0,
  },
  {
    name: "The Addict Leash",
    image: ["image/addictLeash.webp", "image/addictLeash2.webp"],
    price: 49.95,
    collection: "addict",
    productType: "leash",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Bonheur Turtleneck Sweater",
    image: ["image/bonheurSweater.webp", "image/bonheurSweater2.webp"],
    price: 44.95,
    collection: "",
    productType: "Sweater",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Boucle Sweater",
    image: ["image/boucleSweater.webp", "image/boucleSweater2.webp"],
    price: 54.95,
    collection: "",
    productType: "Sweater",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Half Zip Sweater",
    image: ["image/halfZipSweater.webp", "image/halfZipSweater2.webp"],
    price: 54.95,
    collection: "",
    productType: "Sweater",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Half Zip Sweater",
    image: ["image/halfZipSweater.webp", "image/halfZipSweater2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Half Zip Sweater",
    image: ["image/halfZipSweater.webp", "image/halfZipSweater2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Half Zip Sweater",
    image: ["image/halfZipSweater.webp", "image/halfZipSweater2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Half Zip Sweater",
    image: ["image/halfZipSweater.webp", "image/halfZipSweater2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
  },
  {
    name: "Half Zip Sweater",
    image: ["image/halfZipSweater.webp", "image/halfZipSweater2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: true,
    salePrice: 43.96,
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

    const img = document.createElement("img");
    img.src = product.image[0];
    img.alt = product.name;
    img.className = "productImage";

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
      productArticle.append(img, title, price);
      if (product.sale) {
        productArticle.appendChild(saleBadge);
        productArticle.appendChild(salePrice);
      }
      container.appendChild(productArticle);
    }
  });
}

const productStyle = [
    {
        name: "Harnesses",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
    {
        name: "Sweaters & Jumpers",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
    {
        name: "Bandanas",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
    {
        name: "Leashes",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
    {
        name: "Collars",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
    {
        name: "Waste Bag Holders",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
    {
        name: "Accessories",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
    {
        name: "For Hoomans",
        image: ["image/harness.webp", "image/addictHarness2.webp"],
        type: "product",
    },
]


document.addEventListener("DOMContentLoaded", () => {
  makeList(productData);
});


