import { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import { Cart } from "../../components/Cart/Cart.js";

export const ShopCart = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return <Cart 
    cartItems={cartItems}
    removeFromCart={removeFromCart}
    clearCart={clearCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}/>;
};