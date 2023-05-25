import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";

export const ProductCard = ({burger}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(burger);
  };

  return (
    <li>
      <h3>{burger.name}</h3>
      <p>Price: ${burger.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
};