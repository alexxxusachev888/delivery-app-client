import React, { createContext, useState, useEffect } from "react";
import { getAllBurgers } from '../services/api';
import { Spinner } from "../components/Spinner/Spinner";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [burgers, setBurgers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
        const loadBurgers = async () => {
          setIsLoading(true);
        const { burgers } = await getAllBurgers();
          setIsLoading(false);
        if (burgers.length !== 0) {
          setBurgers(burgers);
        } else {
          console.log("No burgers in the database");
        }
      };
      loadBurgers();
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
  
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ burgers, cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}
    >
      {isLoading && <Spinner />}
      {children}
    </CartContext.Provider>
  );
};