import React from "react";
import "./HomeAllData.css";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import homeData from "../../app/homeAllData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function HomeAllData() {
  const dispatch = useDispatch();
  let cart = useSelector((s) => s.addToCart);
  console.log(cart);
  const byProduct = (data) => {
    dispatch({
      type: "ADD_TO_CART",
      data: data,
    });
  };

  return (
    <div className="home_all_data_page">
      {homeData.map((item, index) => (
        <div key={index} className="home_container">
          <div className="home_title">
            <h2>
              {item.title}
              <Link>
                {item.titleLinks} {item.titleLinksIcon}
              </Link>
            </h2>
          </div>
          <div className="home_container_card_border">
            {item.card.map((cardItem, index) => (
              <div key={index} className="card_container">
                <button className="heart_btn">
                  <CiHeart />
                </button>
                <Link to={`/single-page/${cardItem.id}`} className="card_img">
                  <img
                    className={cardItem.class}
                    src={cardItem.cardImg[0]}
                    alt=""
                  />
                </Link>
                <div className="card_title">
                  <span>{cardItem.cardTitle.slice(0, 40) + " ..."}</span>
                </div>
                <div className="card_month_border">
                  <span className="month_title">
                    dan {cardItem.cardMonthPrice} som/oyga
                  </span>
                </div>
                <div className="card_price_border">
                  <s>
                    {cardItem.cardPriceActions
                      ? cardItem.cardPriceActions + " so'm"
                      : ""}
                  </s>
                  <span
                    className={cardItem.colorWhite ? cardItem.colorWhite : ""}
                  >
                    {cardItem.cardPrice + " so'm"}
                  </span>
                </div>
                <div className="card_btn_border">
                  <button onClick={() => byProduct(item)}>
                    <FiShoppingCart /> <span>savatga</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeAllData;
