import { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addNewOrder } from "../../services/api";
import { CartItem } from '../CartItem/CartItem';
import { validationSchema } from '../../utils/validationSchema';

export const Cart = ({ cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }) => {
  
  const removeItem = useCallback(
    (itemId) => removeFromCart(itemId), 
    [removeFromCart]
  );

  const increaseItemQuantity = useCallback(
    (itemId) => increaseQuantity(itemId),
    [increaseQuantity]
  );

  const decreaseItemQuantity = useCallback(
    (itemId) => decreaseQuantity(itemId),
    [decreaseQuantity]
  );

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const handleSubmit = async (values) => {
    const order = {...values, totalSum: calculateTotalPrice(), order: cartItems, }
    await addNewOrder(order);
  }

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
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ isValid, dirty }) => (
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
                      <CartItem
                        key={item.id}
                        item={item}
                        increaseQuantity={increaseItemQuantity}
                        decreaseQuantity={decreaseItemQuantity}
                        removeItem={removeItem}
                      />
                    ))}
                  </ul>
                </div>

                <div>
                  <p>Total price: ${calculateTotalPrice()}</p>
                  <button type="submit" disabled={!isValid || !dirty}>Submit</button>
                  <button type="button" onClick={clearCart}>Clear Cart</button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
};