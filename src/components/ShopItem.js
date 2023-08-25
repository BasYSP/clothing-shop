import React, { useContext, useState } from "react";
import Header from "./Header";
import data from "../data/Data";
import { useParams } from "react-router-dom";
import { ShopContext } from "../management/context";

function ShopItem() {
  const options = [
    { value: "S", text: "S" },
    { value: "M", text: "M" },
    { value: "L", text: "L" },
    { value: "XL", text: "XL" },
  ];
  let { id } = useParams();
  const [selected, setSelected] = useState(options[0].value);
  const { addToCart, addToList } = useContext(ShopContext);
  const [toggleWishList, setToggleWishList] = useState(false);
  const { handleCheckListItem } = useContext(ShopContext);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  function handleToggle() {
    if (!toggleWishList) {
      setToggleWishList(true);
    } else {
      setToggleWishList(false);
    }
  }

  return (
    <div>
      <Header />
      <div className="shop-item-container">
        <div className="item-img">
          <img src={require("../images/" + data[id].image + ".jpg")} alt="" />
        </div>
        <div className="item-desc">
          <p>{data[id].brand}</p>
          <h3>{data[id].name}</h3>
          <p>$ {data[id].price} USD</p>
          <div className="item-size">
            <select value={selected} onChange={handleChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                addToCart(data[id].id);
              }}
            >
              ADD TO CART
            </button>

            <button
              onClick={() => {
                addToList(data[id].id);
                handleToggle();
                handleCheckListItem();
              }}
            >
              ADD TO WISHLIST &#128147;
            </button>
          </div>

          <div className="item-details">
            <p>DETAILS</p>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
