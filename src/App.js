import { Global, css, ThemeProvider } from '@emotion/react';
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./utils/CartContext";
import { Shop, History, ShopCart } from "./pages/index";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { theme } from "./utils/theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "@emotion/styled";

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
      }
    `}
  />
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  width: 1200px;
  min-height: 100vh; 
  padding: 20px; 
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CartProvider>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Shop />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Shop />} />
          </Route>
        </Routes>
      </Container>
      <ToastContainer />
    </CartProvider>
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
