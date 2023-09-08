import React from "react";
import { ItemInterface } from "../types/interfaces";
import { cartState } from "../store/cartState";
import { useRecoilState } from "recoil";
import { itemState } from "../store/itemState";

interface ItemProps {
  item: ItemInterface;
}

const CartItem: React.FC<ItemProps> = ({ item }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const [items, setItems] = useRecoilState(itemState);

  const reduceCartItem = () => {
    if (items.find((i) => i.id === item.id)) {
      const cartIndex = cart.findIndex((i) => i.id === item.id);
      if (cart[cartIndex].quantity > 1) {
        const itemIndex = items.findIndex((i) => i.id === item.id);
        const newItems = Array.from(items);
        const i = newItems[itemIndex];
        setItems(
          newItems
            .slice(0, itemIndex)
            .concat({ ...i, quantity: i.quantity + 1 })
            .concat(newItems.slice(itemIndex + 1))
        );
        const cartItemIndex = cart.findIndex((i) => i.id === item.id);
        const newCart = Array.from(cart);
        const iCart = newCart[cartItemIndex];

        setCart(
          newCart
            .slice(0, cartItemIndex)
            .concat({ ...iCart, quantity: iCart.quantity - 1 })
            .concat(newCart.slice(cartItemIndex + 1))
        );
      } else if (cart[cartIndex].quantity === 1) {
        setCart(cart.filter((i) => i.id !== item.id));
        const itemIndex = items.findIndex((i) => i.id === item.id);
        const newItems = Array.from(items);
        const i = newItems[itemIndex];
        setItems(
          newItems
            .slice(0, itemIndex)
            .concat({ ...i, quantity: i.quantity + 1 })
            .concat(newItems.slice(itemIndex + 1))
        );
      }
    }
  };

  const increaseCartItem = () => {
    //   if (item.quantity > 0) {
    if (items.find((i) => i.id === item.id)) {
      const itemIndex = items.findIndex((i) => i.id === item.id);
      if (items[itemIndex].quantity > 0) {
        const newItems = Array.from(items);
        const i = newItems[itemIndex];
        setItems(
          newItems
            .slice(0, itemIndex)
            .concat({ ...i, quantity: i.quantity - 1 })
            .concat(newItems.slice(itemIndex + 1))
        );
        const cartItemIndex = cart.findIndex((i) => i.id === item.id);
        const newCart = Array.from(cart);
        const iCart = newCart[cartItemIndex];

        setCart(
          newCart
            .slice(0, cartItemIndex)
            .concat({ ...iCart, quantity: iCart.quantity + 1 })
            .concat(newCart.slice(cartItemIndex + 1))
        );
      } else {
        alert("Item is out of stock");
      }
    }
  };

  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-gray-200 py-2">
      <div className="flex flex-row items-center">
        <img
          src={item.imageURL}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-sm">{item.type}</p>
          <p className="text-sm">{item.gender}</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        {/* remove item */}
        <button
          onClick={reduceCartItem}
          className="text-white mr-1 p-2 hover:bg-slate-400 bg-slate-800 rounded"
        >
          -
        </button>

        <span className="text-sm">{item.quantity}</span>
        <button
          onClick={increaseCartItem}
          className="text-white ml-1 p-2 hover:bg-slate-400 bg-slate-800 rounded"
        >
          +
        </button>
      </div>
      <div className="flex flex-row items-center">
        <span className="text-lg font-bold mr-2">₹{item.price}</span>
        <span className="text-sm">x{item.quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
