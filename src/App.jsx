import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./routes";
import { CartProvider, useCart } from "./pages/CartContext";
import CartSidebar from "./pages/CartSidebar";
import { WishlistProvider } from "./pages/WishlistContext";

function AppContent() {
  const { showCart } = useCart();
  return (
    <>
      <Header />
      {showCart && <CartSidebar />}
      <AppRouter />
      <Footer />
    </>
  );
}

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
