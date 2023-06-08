import React from "react";
import items from "../data";
import cafeLogo from "./cafeLogo.png";
import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={cafeLogo} alt="aryan cafe" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems}/>
      </section>
    </main>
  );
};

export default Home;
