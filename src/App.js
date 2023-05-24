import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./utils/CartContext";
import { Shop } from "./pages/Shop/Shop";
import { ShopCart } from "./pages/ShopCart/ShopCart";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Shop />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="*" element={<Shop />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
