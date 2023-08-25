import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <Link to="/login" className="btn btn-success">
        Login
      </Link>

      <Link to="/register" className="btn btn-primary">
        Register
      </Link>
    </div>
  );
}

export default Welcome;
