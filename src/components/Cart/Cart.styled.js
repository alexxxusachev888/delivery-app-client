import styled from "@emotion/styled";
import { ErrorMessage } from "formik";

export const Container = styled.div`
  padding: 40px;
  background-color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily};
`;

export const Heading = styled.h1`
  font-size: ${props => props.theme.headings.h1.fontSize};
  color: ${props => props.theme.headings.h1.color};
  margin-bottom: ${props => props.theme.headings.h1.marginBottom};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Section = styled.section`
  width: 48%;
  box-shadow: ${props => props.theme.shadows.small};
  padding: 20px;
  border-radius: ${props => props.theme.borders.radius};
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 0 20px;
`;

export const Legend = styled.legend`
  font-size: ${props => props.theme.headings.h3.fontSize};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.headings.h3.color};
  margin-bottom: ${props => props.theme.headings.h3.marginBottom};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.typography.fontWeight.bold};

  input {
    width: 100%;
    padding: ${props => props.theme.inputs.padding};
    border: ${props => props.theme.borders.width} solid ${props => props.theme.inputs.borderColor};
    border-radius: ${props => props.theme.inputs.borderRadius};
    &:focus {
      border-color: ${props => props.theme.inputs.focusBorderColor};
    }
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

export const CartItems = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 20px;
  }
`;

export const TotalPrice = styled.p`
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: 10px;
`;
export const Button = styled.button`
  background-color: ${props => props.theme.button.primary.background};
  color: ${props => props.theme.button.primary.color};
  border: none;
  border-radius: ${props => props.theme.borders.radius};
  padding: 10px 20px;
  font-size: ${props => props.theme.typography.fontSize};
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color:${props => props.theme.button.primary.hover.background};
  }
`;

export const SubmitButton = styled(Button)`
  &:disabled {
    background-color: ${props => props.theme.button.secondary.background};
    color: ${props => props.theme.button.secondary.color};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${props => props.theme.button.primary.hover.background};
  }
`;

export const ClearCartButton = styled(Button)`
  background-color: ${props => props.theme.button.secondary.background};
  color: ${props => props.theme.button.secondary.color};

  &:hover {
    background-color: ${props => props.theme.button.secondary.hover.background};
    color: ${props => props.theme.button.secondary.hover.color};
  }
`;