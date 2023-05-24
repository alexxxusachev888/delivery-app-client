import React, { useContext } from "react";
import { CartContext } from "../../utils/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Cart = (props) => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const removeItem = (itemId) => {
    removeFromCart(itemId);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Cart</h1>
      <main>
        <section>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              address: ""
            }}
            onSubmit={(values) => {
              // Handle form submission
              console.log(values);
            }}
          >
            <Form>
              <fieldset>
                <legend>Shipping Details</legend>
                <div>
                  <label htmlFor="name">
                    Name:
                    <Field type="text" id="name" name="name" />
                  </label>
                  <ErrorMessage name="name" component="div" />

                  <label htmlFor="email">
                    Email:
                    <Field type="email" id="email" name="email" />
                  </label>
                  <ErrorMessage name="email" component="div" />

                  <label htmlFor="phone">
                    Phone:
                    <Field type="tel" id="phone" name="phone" />
                  </label>
                  <ErrorMessage name="phone" component="div" />

                  <label htmlFor="address">
                    Address:
                    <Field type="text" id="address" name="address" />
                  </label>
                  <ErrorMessage name="address" component="div" />
                </div>
              </fieldset>

              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <h3>{item.name}</h3>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <button type="button" onClick={() => increaseQuantity(item.id)}>+</button>
                      <button type="button" onClick={() => decreaseQuantity(item.id)}>-</button>
                      <button type="button" onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p>Total price: ${calculateTotalPrice()}</p>
                <button type="submit">Submit</button>
                <button type="button" onClick={clearCart}>Clear Cart</button>
              </div>
            </Form>
          </Formik>
        </section>
      </main>
    </div>
  );
};