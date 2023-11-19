import React, { useState } from "react";
import "./HeaderTop.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

function HeaderTop() {
  const langueData = [
    {
      title: "Русский",
      id: 0,
    },
    {
      title: "O'zbekcha",
      id: 1,
    },
  ];
  const [openLangue, setOpenLangue] = useState(false);
  const [chevron, setChevron] = useState(false);
  return (
    <div className="header_top">
      <div className="header_top_langue_border">
        <button onClick={() => setOpenLangue(!openLangue)}>
          UZB {openLangue ? <HiChevronUp /> : <HiChevronDown />}
        </button>
        {openLangue && (
          <div className="langue_container">
            {langueData?.map((i, index) => (
              <div key={index} className="langue_container_text_cart line">
                <div className="langue_text_icons">
                  {chevron ? "" : <FiCheck />}
                </div>
                <div
                  onClick={() => setChevron(!chevron, setOpenLangue(false))}
                  className="langue_text"
                >
                  {i.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="header_top_links_border">
        <Link className="right_line">Namoz vaqti</Link>
        <Link>alif shopda soting!</Link>
        <Link>Bizga yozing</Link>
      </div>
    </div>
  );
}

export default HeaderTop;
