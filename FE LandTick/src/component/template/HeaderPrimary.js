import React, { Component } from "react";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicketAlt,
  faSignOutAlt,
  faMoneyCheckAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AdmAddTiket from "../modal/AdmAddTiket";
import { connect } from "react-redux";
import { login } from "../../_actions/userA";

class HeaderPrimary extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      showAdmin: true,
      showUser: true,

      data: [],

      username: "",
      token: "",
      status: "home"
    };
  }
  // navbar-toggler

  onToggle = () => {
    const toggle = document.getElementById("navbarNavAltMarkup");
    alert(toggle);
  };

  render() {
    const { datauserLogin } = this.props.userR;
    let statusLog, userLog;
    if (datauserLogin.data) {
      statusLog = datauserLogin.data.status;
      userLog = datauserLogin.data.username;
    }
    // if (this.props.dataUser.data) {
    //   this.dataUser(this.props.dataUser.data);
    // }

    if (statusLog == "admin") {
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
                      {/* using page */}
                      <Link to="/addticket" className="decorate-none">
                        <div className="add-ticket-adm">
                          <span className="ml-4 mr-3">
                            <FontAwesomeIcon icon={faTicketAlt} />
                          </span>
                          <span>Tambah Tiket</span>
                        </div>
                      </Link>
                      {/* ===== using modal ===== */}
                      {/* <AdmAddTiket showAdd={this.state.showAdd} /> */}
                      {/* ======================= */}
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
    } else if (statusLog == "public") {
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
                <div
                  className="navbar-nav  ml-auto admin-tools"
                  onClick={() =>
                    this.setState({ showUser: !this.state.showUser })
                  }
                >
                  <span className="name-icon-user-admin">{userLog}</span>
                  <div className="nav-mbl-mt-2 text-center">
                    <div className="icon-user"></div>
                  </div>
                  {!this.state.showUser ? (
                    <div className="opsi-admin opsi-user">
                      {console.log(this.state.username)}
                      {/* using page */}
                      <Link to="/mytiket" className="decorate-none">
                        <div className="add-ticket-adm add-ticket-usr drop-shadow-2">
                          <span className="ml-4 mr-3">
                            <FontAwesomeIcon icon={faTicketAlt} />
                          </span>
                          <span>Tiket Saya</span>
                        </div>
                      </Link>
                      <Link to="/payment" className="decorate-none">
                        <div className="add-ticket-adm">
                          <span className="ml-4 mr-3">
                            <FontAwesomeIcon icon={faMoneyCheckAlt} />
                          </span>
                          <span>Payment</span>
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
    } else {
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
                    {/* dataUser={this.dataUser}  */}
                    <LoginModal />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    userR: state.userR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderPrimary);
