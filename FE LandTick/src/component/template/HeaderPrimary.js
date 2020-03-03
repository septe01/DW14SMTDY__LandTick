import React, { Component } from "react";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";

class HeaderPrimary extends Component {
  render() {
    return (
      <div>
        {/* fixed-bottom */}
        <nav className="navbar navbar-expand-lg navbar-light color-bg-white ">
          <div className="container container-fluid">
            <a className="navbar-brand" href="">
              <img
                className="front-logo"
                src="http://localhost:3000/assets/images/logolandtick.png"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav  ml-auto">
                <RegisterModal />
                <LoginModal />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderPrimary;
