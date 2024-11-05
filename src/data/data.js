const products = [
  {
    id: "Df345",
    name: "camisa roja",
    description: " Versátil y llamativa que puede ser un gran añadido a cualquier guardarropa. Es ideal para un estilo casual pero con un toque audaz. ",
    stock: 10,
    price: 25,
    image: ["/img/polo-rojo.jpeg","/img/polo-rojo-1.jpeg","/img/polo-rojo-2.jpg","/img/polo-rojo-3.jpeg"],
    category: "Moda",
  },

  {
    id: "FQ987",
    name: "Adidas Zamba",
    description: "Un clásico atemporal que ha mantenido su popularidad desde su lanzamiento. ",
    stock: 10,
    price: 200,
    image: ["/img/adidas-zamba.jpg","/img/adidas-zamba-1.jpeg","/img/adidas-zamba-2.jpeg","/img/adidas-zamba-3.jpeg"],
    category: "Moda",
  },

  {
    id: "Pf789",
    name: "Play Station 5",
    description: "La PlayStation 5 (PS5) es una consola de videojuegos de última generación que ha revolucionado la experiencia de juego. Con su diseño futurista y su potente hardware, la PS5 ofrece una experiencia de juego inigualable.",
    stock: 10,
    price: 2000,
    image: ["/img/play5.jpeg","/img/play5-1.jpeg","/img/play5-2.jpg","/img/play5-3.jpeg"],
    category: "tecnologia",
  },

  {
    id: "TL159",
    name: "Samsung galaxy S24 +",
    description: "El Samsung Galaxy S24+ es un smartphone de gama alta que combina un diseño elegante con un rendimiento potente.",
    stock: 10,
    price: 1500,
    image: ["/img/samsung-s24.jpeg","/img/samsung-s24-1.webp","/img/samsung-s24-2.webp","/img/samsung-s24-3.webp"],
    category: "tecnologia",
  },

  {
    id: "ZS753",
    name: "DualSense",
    description: "El DualSense tiene un diseño moderno y ergonómico que se adapta cómodamente a las manos.",
    stock: 10,
    price: 350,
    image: ["/img/mando-ps5.webp","/img/mando-ps5-1.jpeg","/img/mando-ps5-2.webp","/img/mando-ps5-3.jpeg"],
    category: "gaming",
  },

  {
    id: "TL059",
    name: "Dragon ball Sparking zero Ps5",
    description: "Dragon Ball: Sparking! Zero es la última entrega de la serie de juegos de lucha Tenkaichi,",
    stock: 10,
    price: 250,
    image: ["/img/juego-dbz.jpeg"],
    category: "gaming",
  },

  {
    id: "RF423",
    name: "Jean Cargo",
    description: "una prenda versátil y práctica que combina el estilo casual con la funcionalidad.",
    stock: 10,
    price: 90,
    image: ["/img/jean.jpg","/img/jean-1.webp","/img/jean-2.jpeg","/img/jean-3.webp"],
    category: "outlet",
  },

  {
    id: "UK961",
    name: "Cardigan",
    description: "Un cárdigan es una prenda de vestir versátil y cómoda, ideal para diversas ocasiones.",
    stock: 10,
    price: 180,
    image: ["/img/cardigan.webp","/img/cardigan-1.jpg","/img/cardigan-2.jpg","/img/cardigan-3.jpeg"],
    category: "outlet",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    },2000);
  });
};

export {getProducts}
