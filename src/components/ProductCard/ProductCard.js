import React, { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import burgerImg from '../../images/burger.jpg';
import { Card } from "./ProductCard.styled";

export const ProductCard = ({ burger }) => {
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = () => {
    addToCart(burger);
  };

  return (
    <Card>
      <img src={burgerImg} alt={burger.name} />
      <h3>{burger.name}</h3>
      <p>Price: ${burger.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </Card>
  );
};