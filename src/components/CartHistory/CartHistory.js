import { 
  Container, 
  Heading, 
  OrderContainer, 
  OrderHeading, 
  OrderInfo, 
  ItemsSection, 
  ItemContainer, 
  ItemInfo } from "./CartHistory.styled";

export const CartHistory = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Heading>Cart History</Heading>
      {orders.map((order) => {
        if (order.order && order.order.length > 0) {
          return (
            <OrderContainer key={order._id}>
              <OrderHeading>Order ID: {order._id}</OrderHeading>
              <OrderInfo>Name: {order.name}</OrderInfo>
              <OrderInfo>Address: {order.address}</OrderInfo>
              <OrderInfo>Total Sum: {order.totalSum}</OrderInfo>
              <ItemsSection>
                <h3>Items:</h3>
                {order.order.map((item, index) => (
                  <ItemContainer key={index}>
                    <ItemInfo>Item Name: {item.name}</ItemInfo>
                    <ItemInfo>Price: {item.price}</ItemInfo>
                    <ItemInfo>Quantity: {item.quantity}</ItemInfo>
                    <ItemInfo>Shop: {item.shop}</ItemInfo>
                  </ItemContainer>
                ))}
              </ItemsSection>
            </OrderContainer>
          );
        }
        return null;
      })}
    </Container>
  );
};




