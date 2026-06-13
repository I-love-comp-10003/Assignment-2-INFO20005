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