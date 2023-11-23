import React, { useState } from "react";
import "./Register.css";
import { HiXMark } from "react-icons/hi2";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../register/register";

function Register({ setRegister, register }) {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");

  JSON.stringify(localStorage.setItem("phone", number));
  const getValue = (e) => {
    e.preventDefault();
    let recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
      callback: (response) => {
        console.log("code");
      },
    });
    signInWithPhoneNumber(auth, value, recaptcha)
      .then((e) => {
        let code = prompt("SMS ga yuborilgan kodni kiriting");
        if (code === null) {
          alert("Kodni kiriting");
        } else {
          e.confirm(code).then((user) => setNumber(user.phoneNumber));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register_page">
      <div className="form_container">
        <div className="form_header">
          <h2>Avtorizatsiya alif shop</h2>
          <button onClick={() => setRegister(false)}>
            <HiXMark />
          </button>
        </div>
        <form onSubmit={getValue}>
          <div className="input_border">
            <label>Telefon raqam</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="tel"
              placeholder="+998 00 000 00 00"
            />
          </div>
          <button className="cart_btn_one">Davom etish</button>
          <button onClick={() => setRegister(false)} className="cart_btn_two">
            Bekor qilish
          </button>
          <div id="recaptcha-container"></div>
        </form>
      </div>
    </div>
  );
}

export default Register;
