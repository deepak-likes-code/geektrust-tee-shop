import { ItemInterface } from "../types/interfaces";
import { cartState } from "../store/cartState";
import { itemState } from "../store/itemState";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";

interface ItemProps {
  item: ItemInterface;
}
export const ItemCard: React.FC<ItemProps> = ({ item }) => {
  const { name, price, type, imageURL, gender, quantity } = item;

  const [cart, setCart] = useRecoilState(cartState);
  const [items, setItems] = useRecoilState(itemState);

  useEffect(() => {}, [cart]);

  const handleAddToCart = () => {
    // Functionality to add item to cart
    if (item.quantity > 0) {
      setCart([...cart, item]);
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity - 1,
          };
        }
        console.log("Added to cart:", item.name);
        return i;
      });
      setItems(newItems);
    } else {
      alert("Item is out of stock");
    }
  };
  return (
    <div className="relative border px-4 py-2 rounded-lg w-64 h-96">
      <img
        src={imageURL}
        alt={name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-sm mb-2">{type}</p>
      <p className="text-sm mb-2">Gender: {gender}</p>
      <p className="text-sm mb-2">Available Quantity: {quantity}</p>
      <div className="absolute bottom-1 left-1">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <span className="text-lg font-bold mr-2">₹{price}</span>
          </div>
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
