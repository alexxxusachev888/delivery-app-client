export const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
    return (    
        <li key={item.id}>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button type="button" onClick={() => increaseQuantity(item.id)}>+</button>
        <button type="button" onClick={() => decreaseQuantity(item.id)}>-</button>
        <button type="button" onClick={() => removeItem(item._id)}>Remove</button>
      </li>)
}
  