import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Menu  from "./Menu";
import items from "./Component/data";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Reservation from "./Reservation";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
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
    <>
    <Router>
      <Navbar/>
      <AnimatePresence wait>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu items={menuItems}/>} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    

 
    </Router>
        
       </>
  );
};

export default App;