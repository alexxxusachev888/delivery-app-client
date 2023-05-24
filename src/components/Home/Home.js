import React, { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export const Home = (props) => {
  const [selectedShop, setSelectedShop] = useState(null);

  const handleShopSelection = (shop) => {
    setSelectedShop(shop);
  };

  const shopList = [
    "McDonald's",
    "KFC (Kentucky Fried Chicken)",
    "Subway",
    "Burger King",
    "Pizza Hut",
    "Domino's Pizza",
    "Starbucks",
    "Taco Bell",
    "Wendy's",
    "Dunkin' Donuts"
  ];

  const products = [
    { id: 1, name: "Product 1", price: 10, quantity: 1, shop: "McDonalds" },
    { id: 2, name: "Product 2", price: 15, quantity: 1, shop: "KFC"},
    { id: 3, name: "Product 3", price: 20, quantity: 1, shop: "Subway" },
    { id: 1, name: "Product 1", price: 10, quantity: 1, shop: "Burger King" },
    { id: 2, name: "Product 2", price: 15, quantity: 1, shop: "Pizza Hut"},
    { id: 3, name: "Product 3", price: 20, quantity: 1, shop: "Domino's Pizza" },
  ];

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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              disabled={selectedShop !== null && selectedShop !== product.shop}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};