import styled from "@emotion/styled";


export const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  ${props => props.theme.headings.h1}
`;

export const OrderContainer = styled.article`
  margin-bottom: 30px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borders.radius};
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: ${props => props.theme.shadows.medium};
  width: 80%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const OrderHeading = styled.h2`
  ${props => props.theme.headings.h2}
  color: ${props => props.theme.colors.accent};
`;

export const OrderInfo = styled.p`
  font-size: ${props => props.theme.typography.fontSize};
  margin-bottom: 5px;
  color: ${props => props.theme.colors.text};
`;

export const ItemsSection = styled.section`
  margin-top: 10px;
  border-top: 2px solid ${props => props.theme.colors.primary};
  padding-top: 10px;
`;

export const ItemContainer = styled.div`
  margin-top: 10px;
  border-left: 2px solid ${props => props.theme.colors.primary};
  padding-left: 10px;
`;

export const ItemInfo = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.text};
`;
