import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      let updated;
      if (exists) {
        updated = prev.filter((item) => item.id !== product.id);
      } else {
        updated = [...prev, product];
      }
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}