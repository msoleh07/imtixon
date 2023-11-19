import React from "react";
import "./scrollCorusel.css";
import scrolBarData from "../../app/scrollBardata";
import { Link } from "react-router-dom";

function ScrollCorusel() {
  return (
    <div className="scroll_corusel_page">
      <div className="scroll_bar">
        {scrolBarData?.map((i, index) => (
          <Link key={index} to={i.title}>
            <div className="scroll_card">
              <div className="scroll_card_img">
                <img src={i.img} alt="" className={i.class} />
              </div>
              <div className="scroll_card_title">
                <p>{i.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ScrollCorusel;
