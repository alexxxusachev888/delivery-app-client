import styled from "@emotion/styled";

export const Card = styled.li`
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  h3 {
    font-size: 18px;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  button {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${props => props.theme.colors.accent};
    }
  }
`;
