const products = [
  {
    id: "Df345",
    name: "camisa roja",
    description: "Define tu estilo ",
    stock: 10,
    price: 20,
    image: "/img/polo-rojo.jpeg",
    category: "Moda",
  },

  {
    id: "FQ987",
    name: "Adidas Zamba",
    description: "Siente te libre a la hora de caminar",
    stock: 10,
    price: 200,
    image: "../../../public/img/adidas-zamba.jpg",
    category: "Moda",
  },

  {
    id: "Pf789",
    name: "Play Station 5",
    description: "muy elegante",
    stock: 10,
    price: 2000,
    image: "/img/play5.jpeg",
    category: "tecnologia",
  },

  {
    id: "TL159",
    name: "Samsung galaxy S24 +",
    description: "muy elegante",
    stock: 10,
    price: 1000,
    image: "/img/samsung-s24.jpeg",
    category: "tecnologia",
  },

  {
    id: "ZS753",
    name: "Dualschok 5",
    description: "muy elegante",
    stock: 10,
    price: 100,
    image: "/img/mando-ps5.webp",
    category: "gaming",
  },

  {
    id: "TL059",
    name: "Dragon ball Sparking zero Ps5",
    description: "muy elegante",
    stock: 10,
    price: 1000,
    image: "/img/juego-dbz.jpeg",
    category: "gaming",
  },

  {
    id: "RF423",
    name: "Jean Cargo",
    description: "muy elegante",
    stock: 10,
    price: 100,
    image: "/img/jean.jpg",
    category: "outlet",
  },

  {
    id: "UK961",
    name: "Cardigan",
    description: "muy elegante",
    stock: 10,
    price: 100,
    image: "/img/cardigan.webp",
    category: "outlet",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    });
  });
};

export {getProducts}
