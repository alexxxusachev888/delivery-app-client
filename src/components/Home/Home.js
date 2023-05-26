import React, { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { shopList } from "../../utils/shopList";
import { Main, Heading, ShopList, ProductList } from "./Home.styled";

export const Home = ({ burgers }) => {
  const [selectedShop, setSelectedShop] = useState(null);

  let filteredBurgers = burgers;

  if (selectedShop && selectedShop !== "All") {
    filteredBurgers = burgers.filter( burger => burger.shop === selectedShop);
  }

  const burgersToRender = filteredBurgers.length > 0 ? filteredBurgers : burgers;

  const handleShopSelection = (shop) => {
    setSelectedShop(shop);
  };

  return (
    <Main>
      <Heading>Home</Heading>
      <div>
        <ShopList>
          {shopList.map((shop) => (
            <li
              key={shop}
              onClick={() => handleShopSelection(shop)}
              className={selectedShop === shop ? "selected" : ""}
            >
              {shop}
            </li>
          ))}
        </ShopList>
      </div>
      <ProductList>
        {burgersToRender.map((burger) => (
          <li key={burger._id}>
            <ProductCard
              burger={burger}
              disabled={selectedShop !== null && selectedShop !== burger.shop}
            />
          </li>
        ))}
      </ProductList>
    </Main>
  );
};