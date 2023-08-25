import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../management/context";
import data from "../data/Data";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Header() {
  const notify = () => toast("Here is your toast.");
  const [cartToggle, setCartToggle] = useState(false);
  const [listToggle, setListToggle] = useState(false);
  const [search, setSearch] = useState();
  const {
    cartItems,
    addToCart,
    removeToCart,
    clearCart,
    checkCart,
    listItems,
    removeToList,
    checkListItem,
  } = useContext(ShopContext);

  const { logOut, user } = useContext(ShopContext);
  const showUser = () => {
    if (user !== null) {
      return (
        <>
          <li>{user.email}</li>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            {" "}
            <FaUserAlt />
          </Link>
        </>
      );
    }
  };
  const showLogout = () => {
    if (user !== null) {
      return (
        <>
          <li onClick={handleLogOut}>Logout</li>
        </>
      );
    }
  };
  let navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  function setCartOpen() {
    if (!cartToggle) {
      setCartToggle(true);
    } else {
      setCartToggle(false);
    }
  }

  function setListOpen() {
    if (!listToggle) {
      setListToggle(true);
    } else {
      setListToggle(false);
    }
  }
  function handlerCheckout() {
    clearCart();
    setCartToggle(false);
  }

  let amount = 0;
  let showCart = () => {
    let sum = 0;

    return (
      <div className={cartToggle ? "cart" : "hide"}>
        YOUR CART
        <div className="cart-topic">
          <div>IMAGE</div>
          <div>BRAND</div>
          <div>NAME</div>
          <div>AMOUNT</div>
          <div>PRICE</div>
        </div>
        {data.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            sum += product.price * cartItems[product.id];
            amount += cartItems[product.id];

            return (
              <>
                <div className="cart-item" key={index}>
                  <div className="cart-img">
                    <img
                      src={require("../images/" + product.image + ".jpg")}
                      alt=""
                    />
                  </div>
                  <p>{product.brand}</p>
                  <p>{product.name}</p>
                  <div className="d-flex">
                    <p onClick={() => addToCart(product.id)}>+</p>
                    <p>{cartItems[product.id]}</p>
                    <p onClick={() => removeToCart(product.id)}>-</p>
                  </div>
                  <p>{product.price * cartItems[product.id]} $</p>
                </div>
              </>
            );
          }
        })}
        <div className="cart-total">
          <h5>TOTAL</h5>
          <p>{sum} $</p>
          <div>
            <button
              onClick={() => {
                handlerCheckout();
                notify();
              }}
            >
              Check Out
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    );
  };
  const mylist = data.filter(({ id }) => listItems.includes(id));
  let showList = () => {
    return (
      <>
        <div className={listToggle ? "wishlist-container" : "hide"}>
          <div>YOUR WISHLIST</div>
          {mylist.map((list, index) => {
            return (
              <>
                <div className="wishlist-item" key={index}>
                  <div className="wishlist-img">
                    <img
                      src={require("../images/" + list.image + ".jpg")}
                      alt=""
                    />
                  </div>
                  <p>{list.name}</p>
                  <p>{list.price} $</p>
                  <p onClick={() => removeToList(list.id)}>DELETE</p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img src={require("../images/logo.png")} alt="logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <Link to={"/"}>
            <li>NEWS</li>
          </Link>

          <Link to={"/shop"}>
            <li>SHOP</li>
          </Link>
          <Link to={"/brands"}>
            <li>BRANDS</li>
          </Link>

          <Link to={"/sale"}>
            <li>SALE</li>
          </Link>
        </ul>
      </div>

      <div className="icon">
        <ul>
          <li>{showUser()}</li>
          <li>
            <div className="wishlist-icon">
              <FaRegHeart onClick={setListOpen} />
              <div
                className={checkListItem ? "wishlist-icon-show" : "hide"}
              ></div>
            </div>
            <div className="">{showList()}</div>
          </li>
          <li>
            <div className="cart-icon">
              <FaShoppingCart onClick={setCartOpen} />
              <div className={checkCart ? "cart-icon-show" : "hide"}></div>
            </div>

            <div className="">{showCart()}</div>
          </li>
          {showLogout()}
        </ul>
      </div>
    </div>
  );
}

export default Header;
