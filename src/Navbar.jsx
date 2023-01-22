import React from "react";
function Navbar({ filteritem, menuList }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn_group">
          {menuList.map((curr) => {
            return (
              <button className="btn" onClick={() => filteritem(curr)}>
                {curr}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
