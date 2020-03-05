import React, { Component } from "react";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class HeaderPrimary extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      showAdmin: true,

      username: "",
      status: ""
    };
  }
  // navbar-toggler

  dataUser = data => {
    this.setState({
      username: this.props.username,
      status: this.props.status
    });
    this.props.dataUser(data);
  };

  onToggle = () => {
    const toggle = document.getElementById("navbarNavAltMarkup");
    alert(toggle);
  };
  render() {
    if (this.props.status == "admin") {
      return (
        <div>
          <nav className="navbar  navbar-expand-lg navbar-light color-bg-white nav-admin">
            <div className="container container-nav-pedding-0">
              <a className="navbar-brand" href="">
                <img
                  alt="logo"
                  className="front-logo"
                  src="http://localhost:3000/assets/images/logolandtick.png"
                />
              </a>
              <div className="navbar-collapse nav-desc" id="navbarNavAltMarkup">
                <div
                  className="navbar-nav  ml-auto admin-tools"
                  onClick={() =>
                    this.setState({ showAdmin: !this.state.showAdmin })
                  }
                >
                  <span className="name-icon-user-admin">Admin</span>
                  <div className="nav-mbl-mt-2 text-center">
                    <div className="icon-admin"></div>
                  </div>
                  {!this.state.showAdmin ? (
                    <div className="opsi-admin">
                      {console.log(this.state.username)}
                      <Link to="/addticket" className="decorate-none">
                        <div className="add-ticket-adm">
                          <span className="ml-4 mr-3">
                            <FontAwesomeIcon icon={faTicketAlt} />
                          </span>
                          <span>Tambah Tiket</span>
                        </div>
                      </Link>
                      <Link to="/" className="decorate-none">
                        <div className="logout-adm">
                          <span className="ml-4 mr-3">
                            {" "}
                            <FontAwesomeIcon icon={faSignOutAlt} />
                          </span>
                          <span>Logout</span>
                        </div>
                      </Link>
                      <div className="arrow-drop"></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    } else if (this.props.status == null) {
      return (
        <div>
          <nav className="navbar  navbar-expand-lg navbar-light color-bg-white ">
            <div className="container container-nav-pedding-0">
              <a className="navbar-brand" href="">
                <img
                  alt="logo"
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
    return (
      <div>
        <nav className="navbar  navbar-expand-lg navbar-light color-bg-white ">
          <div className="container container-nav-pedding-0">
            <a className="navbar-brand" href="">
              <img
                alt="logo"
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
