import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { SidebarData } from "./SidebarData.jsx";
import "./Sidebar.css";
import { Button, Sheet, SheetContent, SheetHeader } from "./ui";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  render() {
    return (
      <Sheet
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            this.props.closeModal();
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
          <SheetHeader className="drawer-header">
            <div className="drawer-heading">
              <p className="drawer-title">Alexander Zhong</p>
              <p className="drawer-description">
                Software engineering, applied AI, and selected projects.
              </p>
            </div>
            <Button
              variant="ghost"
              className="menu-close"
              onClick={this.props.closeModal}
              aria-label="Close navigation menu"
            >
              <X aria-hidden="true" size={18} strokeWidth={2} />
            </Button>
          </SheetHeader>

          <div className="drawer-body">
            <p className="drawer-section-label">Navigation</p>
            <ul className="drawer-nav-list">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      exact={item.path === "/"}
                      to={item.path}
                      className="drawer-nav-link"
                      activeClassName="drawer-nav-link-active"
                      onClick={() => {
                        this.setState({ page: index });
                        this.props.closeModal();
                      }}
                    >
                      <span className="drawer-nav-icon">{item.icon}</span>
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="drawer-footer">
            <span>alexanderzhong.com</span>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
}

export default Sidebar;
