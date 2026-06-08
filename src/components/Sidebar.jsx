import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavigationData } from "./NavigationData.jsx";
import "./Sidebar.css";
import { Button, Sheet, SheetContent, SheetHeader } from "./ui";

function Sidebar({ closeModal }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Sheet
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <SheetContent
        as="nav"
        className="mobile-drawer"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <SheetHeader>
          <div className="drawer-heading">
            <p className="drawer-title">Alexander Zhong</p>
            <p className="drawer-description">
              Software engineering, applied AI, and selected projects.
            </p>
          </div>
          <Button
            variant="ghost"
            className="menu-close"
            onClick={closeModal}
            aria-label="Close navigation menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </Button>
        </SheetHeader>

        <div className="drawer-body">
          <p className="drawer-section-label">Navigation</p>
          <ul className="drawer-nav-list">
            {NavigationData.map((item) => (
              <li key={item.path}>
                <NavLink
                  exact={item.path === "/"}
                  to={item.path}
                  className="drawer-nav-link"
                  activeClassName="drawer-nav-link-active"
                  onClick={closeModal}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="drawer-footer">alexanderzhong.com</div>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
