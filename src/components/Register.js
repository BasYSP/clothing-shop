import React, { useContext, useState } from "react";
import { ShopContext, useUserAuth } from "../management/context";
import { Form, Link, useNavigate } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import Header from "./Header";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useContext(ShopContext);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
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
            <button type="submit">REGISTER</button>
            <div className="mt-3">
              <Link to="/login">
                <p>Already have an account? Login Now!</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
