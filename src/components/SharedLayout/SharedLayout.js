import { Outlet } from "react-router-dom";
import { Container, Header, Nav, CustomNavLink } from "./SharedLayout.styled";

export const SharedLayout = (props) => {
  return (   
    <Container>
      <Header>
        <Nav>
          <CustomNavLink to="/" activeClassName="active">Shop</CustomNavLink>
          <CustomNavLink to="/cart" activeClassName="active">Shopping Cart</CustomNavLink>
          <CustomNavLink to="/history" activeClassName="active">History</CustomNavLink>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
