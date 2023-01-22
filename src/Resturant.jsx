import React, { useState } from "react";
import Menu from "./MenuApi";
import "./styles.css";
import Menucard from "./Menucard";
import Navbar from "./Navbar";

const uniquelist = [
  ...new Set(
    Menu.map((curr) => {
      return curr.category;
    })
  ),
  "All"
];
function Resturant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniquelist);

  const filteritem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatelist = Menu.filter((curr) => {
      return curr.category === category;
    });
    setMenuData(updatelist);
  };
  return (
    <>
      <div className="heading">
        <h1 className="mainheading">Welcome To Resturant</h1>
        <h1 className="menuheading">Menu</h1>
      </div>

      <Navbar filteritem={filteritem} menuList={menuList} />
      <Menucard data={menuData} />
    </>
  );
}
export default Resturant;
