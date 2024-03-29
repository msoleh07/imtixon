import React, { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { GoTrash } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import { LuMinus, LuPlus } from "react-icons/lu";
import { LuChevronsUpDown } from "react-icons/lu";
import { useNavigate } from "react-router";
import { Add_To_Cart_Btn } from "../../store/addToCartBtn";

function Cart() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let cartData = useSelector((s) => s.addToCart);
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState("");
  const [month, setMonth] = useState("");
  const cartDalete = (cartId) => {
    dispatch({
      type: "REMOVE_FORM_CART",
      payload: cartId.id,
    });
  };

  const clearCartData = () => {
    let s = window.confirm("Malumotlarni tozalashga rozimisiz");

    if (s === true) {
      dispatch({
        type: "CLEAR_CART",
      });
    }
  };

  const purchase = () => {
    let s = window.confirm("Sotib olishga rozimisiz");

    if (s === true) {
      dispatch({
        type: "CLEAR_CART",
      });
      dispatch(Add_To_Cart_Btn({ pro: cartData }));
    }
  };

  const [disable, setDisable] = useState(false);
  const plus = (cartData) => {
    if (disable === true) {
      setDisable(false);
    }
    setCount(count + 1);
    setPrice(count + cartData.cardPrice);
    setMonth(count + cartData.cardMonthPrice);
  };
  const minus = (cartData) => {
    if (count <= 2) {
      setDisable(true);
    }
    setCount(count - 1);
    setPrice(count - cartData.cardPrice);
    setMonth(count - cartData.cardMonthPrice);
  };

  return (
    <div className="cart_page">
      {cartData?.length ? (
        <div className="cart_container">
          <div className="cart_left_cards">
            <div className="cart_left_header">
              <h2>
                Savat <span>{cartData?.length} tovarlarni</span>
              </h2>
              <div className="cart_header_select">
                {checked && (
                  <div className="select_dalete_btn">
                    <button onClick={clearCartData}>
                      <GoTrash /> <span>tanlanganlarni o'chirish</span>
                    </button>
                  </div>
                )}
                <div className="select_input">
                  <input
                    name="1"
                    onClick={() => setChecked(!checked)}
                    type="checkbox"
                  />
                  <span>Hammasini tanlash</span>
                </div>
              </div>
            </div>
            <div className="cart_scrol_container">
              <div className="scroll_cart_container">
                {cartData?.map((i, index) => (
                  <div key={index} className="scroll_car_bar">
                    <div className="scroll_bar_container">
                      <div className="scroll_bar_left_img_container">
                        <img src={i.cardImg[0]} alt="" />
                        <button className="cart_img_heart_btn">
                          <FaHeart />
                        </button>
                      </div>
                      <div className="scroll_bar_right_container">
                        <div className="scroll_bar_right_container_left_cards">
                          <div className="title_header_container">
                            <p>{i.cardTitle}</p>
                          </div>
                          <div className="price_container">
                            <span>
                              narxi: <p>{price.length ? price : i.cardPrice}</p>
                            </span>
                            <span>
                              sotuvchi: <p>VIVO OFFICIAL</p>
                            </span>
                          </div>
                          <div className="month_conataner">
                            <span>Muddatli to'lov</span>
                            <div className="month_price_container_text">
                              <p>
                                {month.length ? month : i.cardMonthPrice}
                                <span>so'm</span>
                                <HiOutlineXMark /> 24
                                <span>oyga</span>
                              </p>
                              <LuChevronsUpDown />
                            </div>
                          </div>
                          <div className="price_btn_container">
                            <button
                              disabled={disable}
                              onClick={() => minus(i)}
                              className={disable ? "disable" : ""}
                            >
                              <LuMinus />
                            </button>
                            <p>{count}</p>
                            <button onClick={() => plus(i)}>
                              <LuPlus />
                            </button>
                          </div>
                        </div>
                        <div className="scroll_bar_right_container_right_cards">
                          <input name="3" type="checkbox" />
                          <button onClick={() => cartDalete(i)}>
                            <GoTrash /> o'chirish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="all_cart_data_container">
            <div className="all_data_container">
              <div className="all_data_header">
                <h2>Jami</h2>
                <p>15 500 000 so'm</p>
              </div>
              <div className="all_data_number_container">
                <div className="number_title_container">
                  <span>Tovarla soni</span>
                  <p>1 dona</p>
                </div>
                <div className="number_title_item">
                  <span>Yetkazib berish</span>
                  <p>Bepul</p>
                </div>
                <div className="all_data_title_name">
                  <p>Eshikgacha, Butun O'zbekiston bo'ylab, 1-2 kun</p>
                </div>
              </div>
              <div className="cart_btn_container_cards">
                <div className="cart_btn_title_header_cards">
                  <p>Bepul yetkazib berish</p>
                  <span>Butun O'zbekiston bo'ylab, 1-2 kun</span>
                </div>
                <button className="cart_btn_one">
                  Muddatli to'lovga olish
                </button>
                <button onClick={purchase} className="cart_btn_two">
                  Karta orqali sotib olish
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart_btn_container">
          <div className="cart_btn_title">
            <h2>Savat hozircha boʻsh</h2>
            <span>
              Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan
              foydalaning
            </span>
          </div>
          <div className="cart_btn_border">
            <button className="cart_btn_one">Katalogga o'tish</button>
            <button onClick={() => navigate("/")} className="cart_btn_two">
              Asosiy ekranga o'tish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

//  <div className="cart_btn_container">
// <div className="cart_btn_title">
//   <h2>Savat hozircha boʻsh</h2>
//           <span>
//             Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan
//             foydalaning
//           </span>
//         </div>
//         <div className="cart_btn_border">
//           <button className="cart_btn_one">Katalogga o'tish</button>
//           <button onClick={() => navigate("/")} className="cart_btn_two">
//             Asosiy ekranga o'tish
//           </button>
//         </div>
//       </div>
