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
    name: "Blooming Harness",
    image: ["image/blooming3.webp", "image/blooming1.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "The Frenchie Harness",
    image: ["image/frenchie2.webp", "image/frenchie.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Cavi Harness",
    image: ["image/cavi3.webp", "image/cavi2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: true,
    salePrice: 43.96,
    href: "",
  },
  {
    id: "",
    name: "Wanderlust Harness",
    image: ["image/wander3.jpg", "image/wander2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Joie de Vivre Harness",
    image: ["image/jdv1.webp", "image/jdv2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Edward Harness",
    image: ["image/edward1.jpg", "image/edward2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
  {
    id: "",
    name: "Truffle Harness",
    image: ["image/truffle1.jpg", "image/truffle2.webp"],
    price: 54.95,
    collection: "",
    productType: "harness",
    sale: false,
    salePrice: 0,
    href: "",
  },
];

// Section cards

const productStyle = [
    {
        name: "Harnesses",
        image: ["image/harness.webp", "image/harness.webp"],
        type: "productType",
        href: "harnessProductListing.html"
    },
    {
        name: "Sweaters & Jumpers",
        image: ["image/sweater.jpg", "image/sweater.jpg"],
        type: "productType",
        href: "sweaterProductListing.html"
    },
    {
        name: "Bandanas",
        image: ["image/bandana.webp", "image/bandana.webp"],
        type: "productType",
        href: ""
        
    },
    {
        name: "Leashes",
        image: ["image/leash.jpg", "image/leash.jpg"],
        type: "productType",
        href: ""
    },
    {
        name: "Collars",
        image: ["image/collar.webp", "image/collar.webp"],
        type: "productType",
        href: ""
    },
    {
        name: "Waste Bag Holders",
        image: ["image/wastebag.jpg", "image/wastebag.jpg"],
        type: "productType",
        href: ""
    },
    {
        name: "Accessories",
        image: ["image/accessories.webp", "image/accessories.webp"],
        type: "productType",
        href: ""
    },
    {
        name: "For Hoomans",
        image: ["image/hooman.png", "image/hooman.png"],
        type: "productType",
        href: ""
    },
    {
        name: "Addict",
        image: ["image/addictHarness2.webp", "image/addictHarness.webp"],
        type: "style",
        href: "addictProductListing.html"
    },
    {
        name: "The Frenchie",
        image: ["image/frenchie1.webp", "image/frenchie2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Blooming",
        image: ["image/blooming1.webp", "image/blooming2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "The Dreamers",
        image: ["image/theDreamers1.jpg", "image/theDreamers2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Cavi",
        image: ["image/cavi1.webp", "image/cavi2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Wanderlust",
        image: ["image/wander1.jpg", "image/wander2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Lovers' Picnic",
        image: ["image/loversPicnic1.webp", "image/loversPicnic2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Joie de Vivre",
        image: ["image/jdv1.webp", "image/jdv2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Edward",
        image: ["image/edward1.jpg", "image/edward2.webp"],
        type: "style",
        href: ""
    },
    {
        name: "Truffle  ",
        image: ["image/truffle1.jpg", "image/truffle2.webp"],
        type: "style",
        href: ""
    },
]