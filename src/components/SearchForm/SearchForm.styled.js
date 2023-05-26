import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: ${props => props.theme.bgColor};
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.primaryColor};
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.textColor};
  flex-grow: 1;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.theme.secondaryColor};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.secondaryColorHover};
  }
`;