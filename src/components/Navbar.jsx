import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { NavigationData } from "./NavigationData.jsx";
import Sidebar from "./Sidebar.jsx";
import { Button } from "./ui";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar-root">
        <div className="mobile-navbar-content">
          <Link
            to="/"
            className="mobile-navbar-brand"
            onClick={() => setMenuOpen(false)}
          >
            Alexander Zhong
          </Link>
          <Button
            variant="ghost"
            className="menu-bars"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </Button>
        </div>

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

      {menuOpen &&
        createPortal(
          <Sidebar closeModal={() => setMenuOpen(false)} />,
          document.body,
        )}
    </>
  );
}

export default Navbar;
