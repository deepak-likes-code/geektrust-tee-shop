// components/Header.tsx

import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../store/cartState";
import CartIcon from "./CartIcon";

const Header: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const showCart = () => {
    alert(JSON.stringify(cart));
  };

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Tee-Store</div>
        <nav className="space-x-4 text-center align-middle">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/checkout" className="hover:underline">
            Checkout
          </a>{" "}
          <button onClick={showCart}>
            <CartIcon quantity={cart.length} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
