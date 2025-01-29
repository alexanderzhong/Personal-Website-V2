import React, { useState, Component, useRef } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.js";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { COLORS } from "../assets/constants/colors.js";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  render() {
    // const modal = <div id="modal" onClick={(e) => this.showSidebar} />;
    return (
      <>
        <div
          className="modal-container"
          onClick={(e) => {
            if (e.target.className === "modal-container")
              this.props.closeModal();
          }}
        >
          <nav
            // className={this.state.sidebar ? "nav-menu active" : "nav-menu"}
            className="nav-menu active"
            style={{ zIndex: 5 }}
          >
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    width="50px"
                    viewBox="0 -960 960 960"
                    fill={COLORS.on_surface}
                    onClick={this.props.closeModal}
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link
                      to={item.path}
                      onClick={() => this.setState({ page: index })}
                    >
                      {/* {item.icon} */}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Sidebar;
