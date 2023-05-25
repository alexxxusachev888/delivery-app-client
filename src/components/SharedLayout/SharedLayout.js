import { Outlet, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin-right: 10px;

  &.active {
    font-weight: bold;
  }
`;

export const SharedLayout = (props) => {
    return (   
        <div>
            <header>
            <nav>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/cart">Shopping Cart</NavLink>
                <NavLink to="/history">History</NavLink>
            </nav>
            </header>
            <Outlet />
        </div>
    )
}
