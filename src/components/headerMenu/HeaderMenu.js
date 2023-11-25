import React, { useState } from "react";
import "./HeaderMenu.css";
import { HiX } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import catalogData from "../../app/menuData";

function HeaderMenu({ setBars }) {
  const [acordion, setAcordion] = useState(false);
  return (
    <div className="header_menu">
      <div className="menu_container">
        <div className="munu_header">
          <h2>Menu</h2>
          <input type="text" placeholder="Search" />
          <button onClick={() => setBars(false)}>
            <HiX />
          </button>
        </div>
        <div className="menu_scroll_bar">
          <div className="menu_scroll_item_container">
            <div className="menu_acordion_container">
              <div className="menu_acordion_item">
                <div className="menu_acordion_btn">
                  <h2>Muhammadsoleh</h2>
                  <button onClick={() => setAcordion(!acordion)}>
                    {acordion ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                {acordion && (
                  <div className="menu_acordion_btn_item">
                    <ul>
                      <li>Muhammadsoleh</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
