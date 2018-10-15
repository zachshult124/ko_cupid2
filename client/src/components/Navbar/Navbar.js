import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import glove from "../../images/glove.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand font-weight-bold text-white" to="/">
      KO Cupid <span><img src={glove} alt="logo" /></span>
    </Link>
    <div className="">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link

            to="/home"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link text-white"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link text-white"
            }
          >
            Matches
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link text-white"
            }
          >
            Ref
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
