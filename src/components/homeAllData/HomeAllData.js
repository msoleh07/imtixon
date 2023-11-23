import React, { useState } from "react";
import "./HomeAllData.css";
import { FiShoppingCart } from "react-icons/fi";
import { LuMinus, LuPlus } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import homeData from "../../app/homeAllData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Cart_Btn } from "../../store/addToCartBtn";

import { Add_To_Heart } from "../../store/addToHeart";

function HomeAllData() {
  const dispatch = useDispatch();
  const addToCartData = useSelector((s) => s.addToCartBtn).map((i) => i.id);

  const addToHeart = useSelector((s) => s.addToHeart).map((i) => i.id);
  const [count, setCount] = useState(1);
  const byProduct = (data) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: data,
    });
    dispatch(Add_To_Cart_Btn({ pro: data }));
  };
  const [disable, setDisable] = useState(false);
  const plus = (cartData) => {
    if (disable === true) {
      setDisable(false);
    }
    setCount(count + 1);
  };
  const minus = (cartData) => {
    if (count <= 2) {
      setDisable(true);
    }
    setCount(count - 1);
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
                {addToHeart.some((i) => i === cardItem.id) ? (
                  <button
                    onClick={() => dispatch(Add_To_Heart({ pro: cardItem }))}
                    className="heart_btn"
                  >
                    <IoMdHeart className="heart" />
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(Add_To_Heart({ pro: cardItem }))}
                    className="heart_btn"
                  >
                    <CiHeart />
                  </button>
                )}
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
                  {addToCartData.some((i) => i === cardItem.id) ? (
                    <button className="cart_btn">
                      <button onClick={() => minus()} disabled={disable}>
                        <LuMinus />
                      </button>
                      <span>{count}</span>

                      <button onClick={() => plus()}>
                        <LuPlus />
                      </button>
                    </button>
                  ) : (
                    <button
                      onClick={() => byProduct(cardItem)}
                      className="cart_btn"
                    >
                      <FiShoppingCart /> <span>savatga</span>
                    </button>
                  )}
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

// {cartData.id === cardItem.id ? (
//   <button onClick={() => byProduct(cardItem)}>
//     <LuMinus /> <span>1</span>
//     <LuPlus />
//   </button>
// ) : (
//   <button onClick={() => byProduct(cardItem)}>
//     <FiShoppingCart /> <span>savatga</span>
//   </button>
// )}
