import React, { Component } from "react";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";

class HeaderPrimary extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    };
  }
  // navbar-toggler

  onToggle = () => {
    const toggle = document.getElementById("navbarNavAltMarkup");
    alert(toggle);
  };
  render() {
    return (
      <div>
        {/* fixed-bottom */}
        <nav className="navbar  navbar-expand-lg navbar-light color-bg-white ">
          <div className="container container-fluid">
            <a className="navbar-brand" href="">
              <img
                className="front-logo"
                src="http://localhost:3000/assets/images/logolandtick.png"
              />
            </a>
            {/* <button
              onClick={() => {
                this.setState({
                  show: !this.state.show
                });
              }}
              className="navbar-toggler"
              onClick={this.onToggle}
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="navbar-collapse nav-desc" id="navbarNavAltMarkup">
              <div className="navbar-nav  ml-auto">
                <div className="nav-mbl-mt-2 text-center">
                  <RegisterModal />
                  <LoginModal />
                </div>
              </div>
            </div>

            {/* {this.state.show ? (
              <div className="navbar-collapse nav-mbl" id="navbarNavAltMarkup">
                <div className="navbar-nav  ml-auto">
                  <div className="mt-2 text-center">
                    <RegisterModal className="mb-5" />
                    <LoginModal />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )} */}
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderPrimary;
