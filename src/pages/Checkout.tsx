import React from "react";
import { cartState } from "../store/cartState";
import { useRecoilState } from "recoil";
import CartItem from "../components/CartItem";

const Checkout: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="flex flex-col">
        {cart.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      {/* Total */}
      <div className="flex flex-row justify-between items-center border-b-2 border-gray-200 py-2">
        <div className="flex flex-row items-center">
          <h2 className="text-lg font-semibold">Total</h2>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-lg font-bold mr-2">
            ₹ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
