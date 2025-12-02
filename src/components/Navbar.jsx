import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { COLORS } from "../assets/constants/colors.js";
import Sidebar from "./Sidebar.jsx";
import { SidebarData } from "./SidebarData.js";

const pageMap = ["Home", "Portfolio", "About Me"];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.setModalOpen = this.setModalOpen.bind(this);
    this.setPage = this.setPage.bind(this);
    this.state = {
      modalOpen: false,
      page: 0,
    };
  }

  setModalOpen = (open) => {
    this.setState({
      modalOpen: open,
    });
  };

  setPage = (page) => {
    this.setState({ page: page });
  };

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: COLORS.on_background }}>
          <header className="navbar-root">
            {/* Mobile menu button */}
            <button
              className="menu-bars"
              onClick={() => this.setModalOpen(true)}
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill={COLORS.on_surface}
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>

            {/* Desktop nav */}
            <nav className="navbar-container">
              <div className="top-nav-container">
                {SidebarData.map((item, index) => (
                  <Link key={index} to={item.path} className="top-nav-option">
                    <span className="top-nav-label">{item.title}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </header>
        </IconContext.Provider>

        {this.state.modalOpen &&
          createPortal(
            <Sidebar
              closeModal={() => this.setModalOpen(false)}
              modalOpen={this.state.modalOpen}
              setPage={this.setPage}
            />,
            document.body,
          )}
      </>
    );
  }
}

export default Navbar;
