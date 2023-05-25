import React, { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { shopList } from "../../utils/shopList";

export const Home = ({burgers}) => {
  const [selectedShop, setSelectedShop] = useState(null);

  const handleShopSelection = (shop) => {
    setSelectedShop(shop);
  };

  return (
    <main>
      <h1>Home</h1>
      <div>
        <ul>
          {shopList.map((shop) => (
            <li
              key={shop}
              onClick={() => handleShopSelection(shop)}
              className={selectedShop === shop ? "selected" : ""}
            >
              {shop}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {burgers.map((burger) => (
            <ProductCard
              key={burger._id}
              burger={burger}
              disabled={selectedShop !== null && selectedShop !== burger.shop}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};