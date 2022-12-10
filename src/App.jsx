import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/NavBar";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="cart" element={<p>Cart</p>} />
        <Route path="auth" element={<p>Log in</p>} />
        <Route path="wishlist" element={<p>Wishlist</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
