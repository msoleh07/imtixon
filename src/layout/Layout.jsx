import React from "react";
import { Outlet } from "react-router";
import HeaderTop from "../components/header/headerTop/HeaderTop";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
function Layout() {
  return (
    <div className="layout_page">
      <HeaderTop />
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
      <Menu />
    </div>
  );
}

export default Layout;
