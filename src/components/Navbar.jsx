import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { Menu } from "lucide-react";
import "./Navbar.css";
import Sidebar from "./Sidebar.jsx";
import { SidebarData } from "./SidebarData.jsx";
import { Button } from "./ui";

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
        <header className="navbar-root">
          <div className="mobile-navbar-content">
            <Link
              to="/"
              className="mobile-navbar-brand"
              onClick={() => this.setModalOpen(false)}
            >
              Alexander Zhong
            </Link>
            <Button
              variant="ghost"
              className="menu-bars"
              onClick={() => this.setModalOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={this.state.modalOpen}
            >
              <Menu aria-hidden="true" size={24} strokeWidth={2} />
            </Button>
          </div>

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
