import React, { useState, Component, useRef } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { COLORS } from "../assets/constants/colors.js";
import Sidebar from "./Sidebar.jsx";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.setModalOpen = this.setModalOpen.bind(this);
    this.state = {
      modalOpen: false,
    };
  }

  setModalOpen = (open) => {
    console.log("Opening");
    this.setState({
      modalOpen: open,
    });
  };

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: COLORS.on_background }}>
          <div>
            <div className="navbar">
              <Link to="#" className="menu-bars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill={COLORS.on_surface}
                  onClick={() => this.setModalOpen(true)}
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </Link>
              <h1 id="page-name">{this.state.page ? "Portfolio" : "Home"}</h1>
            </div>
          </div>
        </IconContext.Provider>
        {this.state.modalOpen &&
          createPortal(
            <Sidebar closeModal={() => this.setModalOpen(false)} />,
            document.body,
          )}
      </>
    );
  }
}

export default Navbar;
