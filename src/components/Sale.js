import React, { useState } from "react";
import Header from "./Header";
import { Col, Row } from "react-bootstrap";
import data from "../data/Data";
import { Link } from "react-router-dom";

function Sale() {
  const [checkDisc, setCheckDisc] = useState(false);

  return (
    <div>
      <Header />
      <div className="sale-header">FILTER ( 400 products )</div>
      <div className="sale-container">
        <Row className="mt-4">
          {data.slice(8, 16).map((item, index) => {
            return (
              <Col lg={3} md={6} key={index}>
                <div className="sale-item">
                  <Link to={`/shopItem/${item.id - 1}`}>
                    <img
                      src={require("../images/" + item.image + ".jpg")}
                      alt=""
                    />
                  </Link>

                  <div className="sale-tag">
                    <p>SALE</p>
                  </div>
                  <div className="sale-item-desc">
                    <p>{item.brand}</p>
                    <p>{item.name}</p>
                    <div className="sale-item-discount">
                      <p>$ {item.originalprice} USD</p>
                      <p>$ {item.price} USD</p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Sale;
