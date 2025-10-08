import React, { useState, Component, useRef } from "react";
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
    console.log("Opening");
    this.setState({
      modalOpen: open,
    });
  };

  setPage = (page) => {
    console.log("Setting page");
    this.setState({ page: page });
  };

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: COLORS.on_background }}>
          <div>
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
            <div className="navbar-container">
              {/* <h1 id="page-name">{pageMap[this.state.page]}</h1> */}
              <div className="top-nav-container">
                {SidebarData.map((item, index) => {
                  return (
                    <Link to={item.path} className="top-nav-option">
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </IconContext.Provider>
        {createPortal(
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
