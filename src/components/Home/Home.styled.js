import styled from "@emotion/styled";

export const Main = styled.main`
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ShopList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  display: flex;

  li {
    cursor: pointer;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 4px;
    margin-right: 10px;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.primary};
      box-shadow: ${props => props.theme.shadows.medium};
    }

    &.selected {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  li {
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: ${props => props.theme.shadows.medium};
    }
  }
`;
