import React, { useContext } from "react";
import { ShopContext } from "../management/context";
import { useNavigate } from "react-router-dom";

function Home1() {
  const { logOut, user } = useContext(ShopContext);

  let navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      Welcome to homepage
      <p>Hi, Mr {user.email}</p>
      <button onClick={handleLogOut} className="btn btn-danger">
        LogOut
      </button>
    </div>
  );
}

export default Home1;
