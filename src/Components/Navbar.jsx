import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
        <Link to="/">
            <h1 className="navbar-brand">zeptoX</h1>
          </Link> 
        </div>
        <div className="navbar-right">
          <Link to="/signup">
            <button className="btn btn-outline-primary">SignUp</button>
          </Link>
          <Link to={"/login"}>
            <button className="btn btn-outline-success">LogIn</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
