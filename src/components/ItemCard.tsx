import { ItemInterface } from "../types/interfaces";
import React from "react";

interface ItemProps {
  item: ItemInterface;
}
export const ItemCard: React.FC<ItemProps> = ({ item }) => {
  const { name, price, type, imageURL, gender, quantity } = item;

  const handleAddToCart = () => {
    // Functionality to add item to cart
    console.log("Added to cart:", item.name);
  };
  return (
    <div className="border px-4 py-2 rounded-lg w-64 h-96">
      <img
        src={imageURL}
        alt={name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-sm mb-2">{type}</p>
      <p className="text-sm mb-2">Gender: {gender}</p>
      <p className="text-sm mb-2">Available Quantity: {quantity}</p>
      <div className="relative bottom-1 right-0">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white p-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
