import { useEffect, useState } from "react";
import { ItemCard } from "../components/ItemCard";
import { useRecoilState, useSetRecoilState } from "recoil";
import { itemState } from "../store/itemState";
import { paintState } from "../store/paintState";

const Home = () => {
  //   const [items, setItems] = useState<ItemInterface[]>([]);
  const [items, setItems] = useRecoilState(itemState);
  const [paint, setPaint] = useRecoilState(paintState);
  useEffect(() => {
    if (!paint) {
      console.log("fetching items");
      fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        });
      setPaint(true);
    }
  }, [paint]);

  return (
    <div className="container mx-auto p-4">
      {items.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <li key={item.id}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center my-4">No items found or still loading...</p>
      )}
    </div>
  );
};

export default Home;
