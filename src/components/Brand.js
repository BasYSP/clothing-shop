import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Brand() {
  return (
    <>
      <Header />
      <Link to={`/brandshop/${"supreme"}`}>
        <div className="brand-container">
          <img src={require("../images/brand-supreme.jpg")}></img>
          <div className="brand-text-left">
            <p>SUPREME</p>
          </div>
        </div>
      </Link>

      <Link to={`/brandshop/${"balenciaga"}`}>
        <div className="brand-container">
          <img src={require("../images/brand-balenciaga.jpg")}></img>
          <div className="brand-text-right">
            <p>BALENCIAGA</p>
          </div>
        </div>
      </Link>
      <Link to={`/brandshop/${"street"}`}>
        <div className="brand-container">
          <img src={require("../images/brand-street.jpg")}></img>
          <div className="brand-text-left">
            <p>STREET</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Brand;
