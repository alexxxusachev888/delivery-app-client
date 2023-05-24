import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";

export const ProductCard = ({product}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <li>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
};