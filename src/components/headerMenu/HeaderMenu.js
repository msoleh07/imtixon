import React from "react";
import "./HeaderMenu.css";
import { HiX } from "react-icons/hi";

function HeaderMenu({ menu }) {
  return (
    <div className="header_menu">
      <div className="menu_container">
        <div className="munu_header">
          <button onClick={menu(false)}>
            <HiX />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
