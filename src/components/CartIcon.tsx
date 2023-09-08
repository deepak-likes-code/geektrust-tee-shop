import React from "react";

interface CartProps {
  quantity: number;
}

const CartIcon: React.FC<CartProps> = ({ quantity }) => {
  return (
    <div className="relative">
      <img src="src/assets/cart.png" alt="Cart" className="w-7 h-7" />

      {/* Quantity circle */}
      <div className="absolute -top-1 -right-2 rounded-full bg-red-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center">
        {quantity}
      </div>
    </div>
  );
};

export default CartIcon;
