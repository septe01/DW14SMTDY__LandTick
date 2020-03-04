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

  dataUser = data => {
    this.props.dataUser(data);
  };

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
            <div className="navbar-collapse nav-desc" id="navbarNavAltMarkup">
              <div className="navbar-nav  ml-auto">
                <div className="nav-mbl-mt-2 text-center">
                  <RegisterModal />
                  <LoginModal dataUser={this.dataUser} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderPrimary;
