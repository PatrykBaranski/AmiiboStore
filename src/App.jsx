import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Main Page</p>} />
        <Route path="cart" element={<p>Cart</p>} />
        <Route path="auth" element={<p>Log in</p>} />
        <Route path="wishlist" element={<p>Wishlist</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
