import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (newProduct) => {
    const isProductInCart = isInCart(newProduct.id);
    if (isProductInCart) {
      const tempCart = [...cart];
      const findIndex = tempCart.findIndex((productCart) => productCart.id === newProduct.id);
      tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity;
      setCart(tempCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const isInCart = (idProduct) => {
    return cart.some((productCart) => productCart.id === idProduct);
  };

  const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
    return quantity;
  };

  const totalPrice = () => {
    const price = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0);
    return price;
  };

  const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter((productCart) => productCart.id !== idProduct);
    setCart(filterProducts);
  };

  const deleteCart = () => {
    setCart([]);
  };

  const increment = (id) => {
    const tempCart = [...cart];
    const findIndex = tempCart.findIndex((productCart) => productCart.id === id);
    if (findIndex !== -1) {
      tempCart[findIndex].quantity += 1;
      setCart(tempCart);
    }
  };

  const decrement = (id) => {
    const tempCart = [...cart];
    const findIndex = tempCart.findIndex((productCart) => productCart.id === id);
    if (findIndex !== -1 && tempCart[findIndex].quantity > 1) {
      tempCart[findIndex].quantity -= 1;
      setCart(tempCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
