import React from "react";
import "./Admin.css";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  let navigate = useNavigate();
  let phone = window.localStorage.getItem("phone");
  const LogOut = () => {
    JSON.stringify(localStorage.removeItem("phone"));
    navigate("/");
  };
  return (
    <div className="admin_page">
      <div className="admin_header">
        <h2>{phone + " Admin"}</h2>
        <button onClick={LogOut}>
          <IoIosLogOut />
        </button>
      </div>
    </div>
  );
};

export default Admin;
