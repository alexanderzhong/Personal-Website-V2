import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { NavigationData } from "./NavigationData.jsx";

function Navbar() {
  return (
    <header className="navbar-root">
      <nav className="navbar-container" aria-label="Primary navigation">
        <Link to="/" className="navbar-brand">
          Alexander Zhong
        </Link>
        <div className="top-nav-container">
          {NavigationData.map((item) => (
            <NavLink
              key={item.path}
              exact={item.path === "/"}
              to={item.path}
              className="top-nav-option"
              activeClassName="top-nav-option-active"
            >
              <span className="top-nav-label">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
