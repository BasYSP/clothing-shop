import React, { useContext, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import data from "../data/Data";
import ShopItem from "./ShopItem";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Link to={`/sale`}>
        <div className="banner1">
          <img src={require("../images/banner1.jpg")} alt=""></img>

          <div className="banner1-text1">
            <h3>SALE ON SALE</h3>
          </div>
          <div className="banner1-text2">
            <h2>TAKE A FURTHER</h2>
          </div>
          <div className="banner1-text3">
            <h1>30%OFF SALE STYLE</h1>
          </div>
          <div className="banner1-text4">
            <button>SHOP NOW</button>
          </div>
        </div>{" "}
      </Link>
      <Link to={`/brands`}>
        <div className="banner1">
          <img src={require("../images/banner2.jpg")} alt=""></img>

          <div className="banner2-text1">
            <h1>NEW ARRIVALS</h1>
          </div>
          <div className="banner2-text2">
            <h2>DISCOVER THE LASTEST</h2>
          </div>
          <div className="banner2-text3">
            <button>SHOP NOW</button>
          </div>
        </div>{" "}
      </Link>
      {/* ==================   BEST-SELLER==================== */}
      <div className="best-seller-container">
        <div className="best-seller-bar">
          <h2>BEST SELLERS</h2>

          <a href="/shop">VIEW ALL</a>
        </div>

        <div className="best-seller-item-box">
          {data.slice(0, 4).map((item, index) => {
            return (
              <div className="best-seller-item" key={index}>
                <Link to={`shopItem/${index}`}>
                  <img
                    src={require("../images/" + item.image + ".jpg")}
                    alt=""
                  />
                </Link>

                <div className="best-seller-item-desc">
                  <p>{item.brand}</p>
                  <p>{item.name}</p>
                  <p>${item.price} USD</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ==============  END BEST-SELLER================== */}
      {/* ==============  BANNNER 3================== */}
      <div className="banner3">
        <div className="banner3-1">
          <img src={require("../images/summer-clothes.jpg")} />
          <div className="banner3-2-desc" style={{ color: "black" }}>
            <p>SUMMER</p> <p>IS</p> <p>COMING</p>
          </div>
        </div>
        <div className="banner3-2">
          <img src={require("../images/winter-clothes.jpg")} />
          <div className="banner3-2-desc">
            <p>WINTER</p> <p>IS</p> <p>COMING</p>
          </div>
        </div>
      </div>
      {/* ==============  END BANNER 3 ================== */}
      <div className="subscribe">
        <div className="subscribe-box">
          <h3>SUBSCRIBE FOR NEWS</h3>
          <input placeholder="Email Address"></input>
          <button>Submit</button>
        </div>
        <div className="subscribe-box">
          <h3>TALK WITH US</h3>
          <input placeholder="Email Address"></input>
          <input placeholder="Name"></input>
          <input placeholder="Your Text ..."></input>
          <button>Submit</button>
        </div>
      </div>
      {/* ==============  FOOTER ================== */}
      <Footer />
    </div>
  );
}

export default Home;
