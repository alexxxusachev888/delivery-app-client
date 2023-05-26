import React, { useCallback } from 'react';
import { Formik, Form, Field } from "formik";
import { addNewOrder } from "../../services/api";
import { CartItem } from '../CartItem/CartItem';
import { validationSchema } from '../../utils/validationSchema';
import { 
  CartItems, 
  TotalPrice, 
  ClearCartButton, 
  Container, 
  Heading, 
  Main, 
  Section, 
  Fieldset, 
  Legend, 
  Label, 
  Error, 
  SubmitButton } from './Cart.styled';

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
    const order = { ...values, totalSum: calculateTotalPrice(), order: cartItems };
    await addNewOrder(order);
  };

  return (
    <Container>
      <Heading>Cart</Heading>
      <Main>
        <Section>
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
                <Fieldset>
                  <Legend>Shipping Details</Legend>
                  <Label htmlFor="name">
                    Name:
                    <Field type="text" id="name" name="name" />
                  </Label>
                  <Error name="name" component="div" />
                  <Label htmlFor="email">
                    Email:
                    <Field type="email" id="email" name="email" />
                  </Label>
                  <Error name="email" component="div" />
                  <Label htmlFor="phone">
                    Phone:
                    <Field type="tel" id="phone" name="phone" />
                  </Label>
                  <Error name="phone" component="div" />
                  <Label htmlFor="address">
                    Address:
                    <Field type="text" id="address" name="address" />
                  </Label>
                  <Error name="address" component="div" />
                </Fieldset>
                <SubmitButton type="submit" disabled={!isValid || !dirty}>
                  Submit
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Section>
        <Section>
          <Fieldset>
            <Legend>Order Details</Legend>
            <CartItems>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQuantity={increaseItemQuantity}
                  decreaseQuantity={decreaseItemQuantity}
                  removeItem={removeItem}
                />
              ))}
            </CartItems>
            <TotalPrice>Total price: ${calculateTotalPrice()}</TotalPrice>
            <ClearCartButton type="button" onClick={clearCart}>
              Clear Cart
            </ClearCartButton>
          </Fieldset>
          </Section>
      </Main>
    </Container>
  );
};