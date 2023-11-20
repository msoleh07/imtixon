import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { HiOutlineHeart, HiX } from "react-icons/hi";
import catalogData from "../../app/menuData";
import homeData from "../../app/homeAllData";
import Register from "../../pages/register/Register";
import { LiaBarsSolid } from "react-icons/lia";
import HeaderMenu from "../headerMenu/HeaderMenu";

function Header() {
  const [value, setValue] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [register, setRegister] = useState(false);
  const [bars, setBars] = useState(false);
  let phone = window.localStorage.getItem("phone");
  const inputData = homeData.filter((i) =>
    i.card.filter((x) => x.type === value)
  );
  const setType = inputData.filter((item) =>
    item.card.filter((type) => type.type)
  );
  openMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  register
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <header>
      <div className="header_logo">
        <Link>
          <img
            src="https://alifshop.uz/images/alifshop-rectangle-logo.svg"
            alt=""
          />
          <p>
            alif <span>shop</span>
          </p>
        </Link>
      </div>
      <div className="header_catalog_btn">
        <button onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <HiX /> : <FiMenu />}
          <span>Tavarlar katalogi</span>
        </button>
      </div>
      {openMenu && (
        <div className="catalog_container">
          <div className="catlog_card_container">
            {catalogData.map((i, index) => (
              <div key={index} className="ctalog_item">
                {i.menuTitle}
                <div className="header_catalog_container_card">
                  <div className="container_tatalog">
                    {i.card?.map((titleData, index) => (
                      <div key={index} className="container_cords_catalog">
                        <div className="container_catalog_title_header">
                          <Link className={titleData.className}>
                            <h2>{titleData.title}</h2>
                          </Link>
                        </div>
                        <div className="container_catalog_cards_main">
                          {titleData.titleLink?.map((titleLink, index) => (
                            <ul key={index} className={titleData.className}>
                              <li>
                                <Link>{titleLink.apple}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.tecno}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.xiaomi}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.vivo}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.honor}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.samsung}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.smartfonlar}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.tugmali}</Link>
                              </li>
                              <li>
                                <Link>{titleLink.tugmaliTelefonlar}</Link>
                              </li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="header_input_container">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="Tavarlarni izohlash"
        />
        <button className="input_search_btn">
          <FiSearch />
        </button>
      </div>

      {value ? (
        <div className="search_container">
          <div className="search_scroll_bar">
            <ul className="search_scroll_bar_ul_text">
              {setType.map((i, index) => (
                <div key={index} className="map">
                  {i.card?.map((item, index) => (
                    <li key={index} className="search_scroll_bar_li_text">
                      <Link
                        onClick={() => setValue("", false)}
                        to={`/single-page/${item.id}`}
                      >
                        {item.type}
                      </Link>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="header_shopping_container">
        <Link to={"/cart"}>
          <FiShoppingCart />
          <span>Savat</span>
        </Link>
        <Link>
          <HiOutlineHeart />
          <span>Saralanganlar</span>
        </Link>
        <div className="header_register_btn">
          {phone?.length ? (
            <button>{phone}</button>
          ) : (
            <button onClick={() => setRegister(true)}>Kirish</button>
          )}
        </div>
        <button className="header_bars">
          <LiaBarsSolid />
        </button>
        {bars && <HeaderMenu />}
      </div>
      {register && <Register setRegister={setRegister} register={register} />}
    </header>
  );
}

export default Header;
