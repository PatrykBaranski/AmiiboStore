import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/NavBar";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="cart" element={<p>Cart</p>} />
        <Route path="auth" element={<p>Log in</p>} />
        <Route path="wishlist" element={<p>Wishlist</p>} />
        <Route path="products/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
