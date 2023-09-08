// components/Header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">E-Store</div>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/cart" className="hover:underline">
            Cart
          </a>
          <a href="/checkout" className="hover:underline">
            Checkout
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
