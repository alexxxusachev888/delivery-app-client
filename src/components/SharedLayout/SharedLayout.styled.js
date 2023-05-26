import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const CustomNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  margin-right: 10px;
  font-size: 16px;
  font-weight: ${props => props.theme.typography.fontWeight.bold};

  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;