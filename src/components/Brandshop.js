import React from "react";
import Header from "./Header";
import { Col, Row } from "react-bootstrap";
import data from "../data/Data";
import { Link, useParams } from "react-router-dom";
function Brandshop() {
  let { brand } = useParams();
  console.log(brand);
  return (
    <div>
      <Header />
      <div className="shop-header">FILTER ( {brand} )</div>
      <div className="shop-container">
        <Row className="mt-4">
          {data.slice(0, 16).map((item, index) => {
            if (item.brand === brand) {
              return (
                <Col lg={3} md={6} key={index}>
                  <div className="shop-item">
                    <Link to={`/shopItem/${index}`}>
                      <img
                        src={require("../images/" + item.image + ".jpg")}
                        alt=""
                      />
                    </Link>

                    <div className="shop-item-desc">
                      <p>{item.brand}</p>
                      <p>{item.name}</p>
                      <p>${item.price} USD</p>
                    </div>
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </div>
    </div>
  );
}

export default Brandshop;
