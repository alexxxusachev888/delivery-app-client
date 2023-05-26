import burger from '../../images/burger.jpg';
import { Item } from "./CartItem.styled";

export const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (    
    <Item>
      <img src={burger} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button type="button" onClick={() => increaseQuantity(item.id)}>+</button>
      <button type="button" onClick={() => decreaseQuantity(item.id)}>-</button>
      <button type="button" onClick={() => removeItem(item._id)}>Remove</button>
    </Item>
  );
};