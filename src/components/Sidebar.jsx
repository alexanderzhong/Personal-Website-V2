import React, { useState, Component, useRef } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.js";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { COLORS } from "../assets/constants/colors.js";

export default function Sidebar({ closeModal, modalOpen, setPage }) {
  console.log(modalOpen);
  console.log(closeModal);
  return (
    <>
      <div
        className={modalOpen ? "modal-container active" : "modal-container"}
        onClick={(e) => {
          if (e.target.className === "modal-container active") {
            console.log("closing");
            closeModal();
          }
        }}
      />
      <nav
        className={modalOpen ? "sidebar active" : "sidebar"}
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
                onClick={closeModal}
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
                  onClick={() => {
                    setPage(index);
                    closeModal();
                  }}
                >
                  {/* {item.icon} */}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* </div> */}
    </>
  );
}
