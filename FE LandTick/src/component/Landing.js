import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
import { Row, Button, Col, Navbar, Nav, Form } from "react-bootstrap"; //import component bootstaps
import HeaderPrimary from "./template/HeaderPrimary";
import Jumbotron from "./template/Jumbotron";
import Footer from "./template/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSubway,
  faExchangeAlt,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import LoginModal from "./modal/LoginModal";
import { getUser } from "../_actions/userA";
import { getTiket } from "../_actions/tiketA";

// import { BrowserRouter as Router, Link } from 'react-router-dom';

class Landing extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getTiket();
  }

  // handleShowTicket = () => {
  //   if (localStorage.getItem("token") === null) {
  //     return <LoginModal show={true} />;
  //   }
  //   alert(localStorage.getItem("token"));
  // };

  render() {
    const token = localStorage.getItem("token");
    const ticket = this.props.tiketR.getTiket.ticket;
    // console.log(ticket === undefined);
    let status;
    if (token) {
      if (this.props.userR.getUser[0]) {
        if (this.props.userR.getUser[0].data) {
          status = this.props.userR.getUser[0].data.userAut.role;
        }
      }
    }

    //convert time
    const time = time => time.substr(0, 5);
    //range day
    const getTime = (start, end) => {
      start = start.split(":");
      end = end.split(":");
      var startDate = new Date(0, 0, 0, start[0], start[1], 0);
      var endDate = new Date(0, 0, 0, end[0], end[1], 0);
      var diff = endDate.getTime() - startDate.getTime();
      var hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      var minutes = Math.floor(diff / 1000 / 60);

      if (hours < 0) hours = hours + 24;

      return (
        (hours <= 9 ? "0" : "") +
        `${hours}j` +
        " " +
        (minutes <= 9 ? "0" : "") +
        `${minutes}m`
      );
    };
    // console.log(status);

    if (status === "admin") {
      return <Redirect to="/mydashboard" />;
    }

    return (
      <div>
        <HeaderPrimary />

        <Jumbotron />

        <div className="">
          <div className="container order-panel">
            <div className="row ">
              <div className="col-md-3">
                <div className="mt-3 faSubway-orange">
                  <span className="clr-orange">
                    <FontAwesomeIcon
                      className="clr-orange"
                      icon={faSubway}
                      style={{
                        marginLeft: "20",
                        marginRight: "20",
                        fontSize: "36px",
                        filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
                        boxSizing: "border-box"
                      }}
                    />
                  </span>
                  <span className="kreta">Tiket Kereta Api</span>
                </div>
              </div>
              <div className="col-md-4">
                <span className="kreta mt-2">Tiket Kereta Api</span>
                <div className="form-group">
                  <label htmlFor="inputEmail">Asal</label>
                  <input
                    name="from"
                    type="text"
                    className="form-control input"
                    id="inputtext"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Tanggal Berangkat</label>
                      <input
                        name="dataStart"
                        type="date"
                        className="form-control input"
                        id="inputEmail"
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    style={{
                      position: "relative"
                    }}
                  >
                    <Form.Group>
                      <Form.Check
                        className="checkbox"
                        type="checkbox"
                        label="Pulang Pergi"
                        name="pp"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              {/* ===== */}
              <div className="col-md-1 mbl-arrow">
                <div>
                  <span className="clr-orange">
                    <FontAwesomeIcon
                      className="clr-orange mbl-arrow-icon "
                      icon={faExchangeAlt}
                      style={{
                        marginLeft: "20",
                        marginRight: "20",
                        fontSize: "36px",
                        marginTop: "70",
                        filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
                        boxSizing: "border-box"
                      }}
                    />
                  </span>
                </div>
              </div>
              {/* ===== */}
              <div className="col-md-4">
                <span className="kreta mt-4"></span>
                <div className="form-group mt-2">
                  <label htmlFor="inputEmail">Tujuan</label>
                  <input
                    type="to"
                    className="form-control input"
                    id="inputEmail"
                  />
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Dewasa</label>
                      <select name="adult" className="form-control input">
                        <option>Pilih</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Anak-anak</label>
                      <select name="child" className="form-control input">
                        <option>Pilih</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mbl-btn-search">
                    <Button
                      className=" color-white mr-2 register cari-ticket"
                      // onClick={() => this.handleModal()}
                    >
                      Cari Tiket
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* list  */}
        <div className="container mb-5">
          {/* ============== */}
          <div className="row justify-content-center mt-4">
            <div className="col text-center">Nama Kereta</div>
            <div className="col text-center">Berangkat</div>
            <div className="col text-center"></div>
            <div className="col text-center">Tiba</div>
            <div className="col text-center">Durasi</div>
            <div className="col-md-4 text-center">Harga PerOrang</div>
          </div>
          {/* tiket */}
          {ticket ? (
            ticket.map((val, i) => (
              <div className="" key={i} id={val.id}>
                <div
                  className="row justify-content-center mt-3 field-list box-shadow-2"
                  onClick={this.handleShowTicket}
                >
                  <div className="col text-center">
                    <h6 className="bold-8">{val.name_train}</h6>
                    <p>{val.train.type_train}</p>
                  </div>
                  <div className="col text-center">
                    <h6 className="bold-8">{time(val.start_time)}</h6>
                    <p>{val.start_station}</p>
                  </div>
                  <div className="col text-center">
                    <span className="clr-orange">
                      <FontAwesomeIcon
                        className="clr-orange"
                        icon={faLongArrowAltRight}
                        style={{
                          marginLeft: "20",
                          marginRight: "20",
                          fontSize: "36px",
                          filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
                          boxSizing: "border-box"
                        }}
                      />
                    </span>
                  </div>
                  <div className="col text-center">
                    <h6 className="bold-8">{time(val.arival_time)}</h6>
                    <p>{val.destination_station}</p>
                  </div>
                  <div className="col text-center">
                    <h6 className="bold-8">
                      {getTime(val.start_time, val.arival_time)}
                    </h6>
                  </div>
                  <div className="col-md-4 text-center">
                    <h6 className="bold-8 clr-orange mt-3">Rp. {val.price} </h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <div
                className="row justify-content-center mt-3 field-list box-shadow-2"
                onClick={this.handleShowTicket}
              >
                No data
              </div>
            </div>
          )}

          {/* end tiket */}
          {/* <div className="">
            <div
              className="row justify-content-center mt-3 field-list box-shadow-2"
              onClick={this.handleShowTicket}
            >
              <div className="col text-center">
                <h6 className="bold-8">Argo Mills</h6>
                <p>Eksekutif (H)</p>
              </div>
              <div className="col text-center">
                <h6 className="bold-8">05.00</h6>
                <p>Gambir</p>
              </div>
              <div className="col text-center">
                <span className="clr-orange">
                  <FontAwesomeIcon
                    className="clr-orange"
                    icon={faLongArrowAltRight}
                    style={{
                      marginLeft: "20",
                      marginRight: "20",
                      fontSize: "36px",
                      filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
                      boxSizing: "border-box"
                    }}
                  />
                </span>
              </div>
              <div className="col text-center">
                <h6 className="bold-8">10.05</h6>
                <p>Surabaya</p>
              </div>
              <div className="col text-center">
                <h6 className="bold-8">5j 05m</h6>
              </div>
              <div className="col-md-4 text-center">
                <h6 className="bold-8 clr-orange mt-3">Rp. 250.000 </h6>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userR: state.userR,
    tiketR: state.tiketR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    getTiket: () => dispatch(getTiket())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
