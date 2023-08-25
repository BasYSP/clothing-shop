import React, { useContext, useState } from "react";
import { ShopContext } from "../management/context";
import { Form, Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "./Header";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useContext(ShopContext);

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Header />

      <div className="login-container">
        <div className="login-box">
          <h1>Welcome</h1>
          <img src={require("../images/logo.png")} alt="logo" />
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert variant="danger">Email or Password invalid.</Alert>
            )}

            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">LOGIN</button>
            <div className="mt-3">
              <Link to="/register">
                <p>Don't have an account? Sign Up</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
