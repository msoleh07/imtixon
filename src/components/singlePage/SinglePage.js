import React, { useState } from "react";
import "./SinglePage.css";
import { IoMdStar } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { LiaTruckSolid } from "react-icons/lia";
import { FiRefreshCw } from "react-icons/fi";
import homeData from "../../app/homeAllData";
import categoriaData from "../../app/categoriaData";

function SinglePage() {
  const [catalog, setCatalog] = useState(true);
  const { id } = useParams();
  const data = homeData.find((i) => i.card.find((x) => x.id.toString() === id));
  const i = data.card.find((i) => i.id.toString() === id);
  const [img, setImg] = useState(0);

  return (
    <div className="single_page">
      <div className="single_header">
        <Link>
          <SlArrowLeft /> Tecno smartfonlari chegirmada
        </Link>
      </div>
      <div className="single_container">
        <div className="single_container_left_card">
          <div className="left_card_scroll_img">
            <div className="scroll_card">
              {i.cardImg.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setImg(index)}
                  className="scroll_item_img"
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="left_card_img_container">
            <img src={i.cardImg[img]} alt="" />
          </div>
        </div>
        <div className="single_container_right_card">
          <div className="right_evaluation_header">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <span>Baholanmagan</span>
          </div>
          <div className={i.cardPriceActions ? "card_container_item" : ""}>
            {i.cardPriceActions ? "-15%" : ""}
          </div>
          <div className="right_title_container">
            <h2>{i.cardTitle}</h2>
          </div>
          <div className="right_price_container">
            <div className="right_price_container_left_border">
              <span>Muddatli to’lovga sotib olish</span>
              <p>{i.cardMonthPrice + " so'm/oyiga"} </p>
            </div>
            <div className="right_price_container_right_border">
              <span>Narx</span>
              <p className={i.cardPriceActions ? "red" : "white"}>
                {i.cardPrice + " so'm"}
              </p>
              <s>{i.cardPriceActions ? i.cardPriceActions + " so'm" : ""}</s>
            </div>
          </div>
          <div className="right_month_number_container">
            <div className="month_container">
              <button>3</button>
              <button>6</button>
              <button>12</button>
              <button>18</button>
              <button style={{ borderRight: "none" }}>24</button>
            </div>
            <div className="month_number_btn_container">
              <button>
                <FiShoppingCart /> Savatga saqlash
              </button>
              <div className="heart_btn_container">
                <CiHeart />
              </div>
            </div>
            <div className="right_admin_container">
              <span>Sotuvchi</span>
              <Link>
                JOYBOX
                <button>
                  <IoMdStar /> 5
                </button>
              </Link>
            </div>
            <div className="right_delivery_container">
              <div className="delivery_container_header">
                <div className="delivery_container_title_border">
                  <LiaTruckSolid />
                  <span>Yetkazib berish</span>
                </div>
              </div>
              <div className="delivery_container_text">
                <p>Bepul yetkazib berish</p>
                <span>
                  Yetkazib berish muddati: Toshkent bo'ylab 1 kun ichida.
                  Respublika bo'ylab 3 kungacha.
                </span>
              </div>
              <div className="delivery_container_header">
                <div className="refresh_container">
                  <FiRefreshCw />
                  <span>Tovarni qaytarish</span>
                </div>
                <SlArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single_categoria_container">
        <div className="categoria_header">
          <h2>Ushbu tovar boshqa do'konlarda</h2>
        </div>
        {catalog ? (
          <div className="categoria_container_item">
            {categoriaData.map((item, index) => (
              <ul className={item.addetClassName} key={index}>
                <li className={item.className}>
                  <h2>
                    {item.title}{" "}
                    <button>
                      <IoMdStar />
                      {item.evaluation ? item.evaluation : "4"}
                    </button>
                  </h2>
                </li>
                <li className="categoria_li_item">
                  <span>Muddatli to'lov</span>
                  <p>
                    {item.termPayment + " so'm"}
                    <button>
                      <FaXmark /> 24 oyga
                    </button>
                  </p>
                </li>
                <li className="categoria_li_item">
                  <span>Narxi</span>
                  <div className="categoria_li_price">
                    {item.price + " so'm"}
                  </div>
                </li>
                <li className="categoria_btn">
                  <button>Ko'rish</button>
                </li>
              </ul>
            ))}
          </div>
        ) : (
          <div className="categoria_container_item">
            {categoriaData.slice(0, 2).map((item, index) => (
              <ul className={item.addetClassName} key={index}>
                <li className={item.className}>
                  <h2>
                    {item.title}{" "}
                    <button>
                      <IoMdStar />
                      {item.evaluation ? item.evaluation : "4"}
                    </button>
                  </h2>
                </li>
                <li className="categoria_li_item">
                  <span>Muddatli to'lov</span>
                  <p>
                    {item.termPayment + " so'm"}
                    <button>
                      <FaXmark /> 24 oyga
                    </button>
                  </p>
                </li>
                <li className="categoria_li_item">
                  <span>Narxi</span>
                  <div className="categoria_li_price">
                    {item.price + " so'm"}
                  </div>
                </li>
                <li className="categoria_btn">
                  <button>Ko'rish</button>
                </li>
              </ul>
            ))}
          </div>
        )}
        <div className="categoria_btn_container">
          <div className="btn_border">
            <button>
              <SlArrowLeft />
            </button>
            <button
              onClick={() => setCatalog(true)}
              className={catalog ? "background" : ""}
            >
              1
            </button>
            <button
              style={{ borderRight: "none" }}
              onClick={() => setCatalog(false)}
              className={catalog ? "" : "background"}
            >
              2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
