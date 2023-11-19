import React from "react";
import "./Home.css";
import Corusel from "../../components/corusel/Corusel";
import ScrollCorusel from "../../components/scrollCorusel/ScrollCorusel";
import HomeAllData from "../../components/homeAllData/HomeAllData";

function Home() {
  return (
    <div className="home_page">
      <Corusel />
      <ScrollCorusel />
      <HomeAllData />
    </div>
  );
}

export default Home;
