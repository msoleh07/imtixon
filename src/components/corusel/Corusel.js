import React, { useState } from "react";
import "./corusel.css";
import konditsaner from "../imgs/konditsner.jpg";
import smartfonlar from "../imgs/smartfonlar.png";
import honor from "../imgs/honor.jpg";
import smartTv from "../imgs/smartTv.png";
import vivo from "../imgs/vivo.jpg";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";

function Corusel() {
  const [coruselItim, setCoruselItim] = useState(1);
  const [img, setImg] = useState(konditsaner);
  const [links, setLinks] = useState(0);
  const [addetClass, setAddetClass] = useState(0);
  const coruselData = [
    {
      img: konditsaner,
      coruselLink: "/istgichlar",
      id: "0",
    },
    {
      img: smartfonlar,
      coruselLink: "/smartfonlar",
      id: "1",
    },
    {
      img: honor,
      coruselLink: "/aksiyalar",
      id: "2",
    },
    {
      img: smartTv,
      coruselLink: "/smartTv",
      id: "3",
    },
    {
      img: vivo,
      coruselLink: "/vivoSmartfonlar",
      id: "4",
    },
  ];

  // setTimeout(() => {
  //   if (coruselItim === 6) {
  //     setCoruselItim(coruselItim);
  //   }
  //   setCoruselItim(coruselItim + 1);
  //   setImg(coruselData[coruselItim].img);
  // }, 1000);

  const addetImg = (id) => {
    setImg(coruselData[coruselItim].img);
    setCoruselItim(coruselItim + 1);
    setLinks(coruselData[coruselItim].coruselLink);
  };

  const removImg = (id) => {
    setCoruselItim(coruselItim - 1);
    setImg(coruselData[coruselItim].img);
    setLinks(coruselData[coruselItim].coruselLink);
  };

  const selectBtn = (id) => {
    setImg(coruselData[id].img);
    setLinks(coruselData[coruselItim].coruselLink);
    setAddetClass(id);
  };

  return (
    <div className="corusel_page">
      <div className="corusel_img">
        <Link to={links}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="corusel_btn">
        <button className="btn_corusel" onClick={() => removImg()}>
          <SlArrowLeft />
        </button>
        <div className="btn_select">
          {coruselData.map((i, index) => (
            <button
              key={index}
              onClick={() => selectBtn(i.id)}
              className={i.id === addetClass ? "select" : "none_selec"}
            ></button>
          ))}
        </div>
        <button className="btn_corusel" onClick={() => addetImg()}>
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Corusel;
