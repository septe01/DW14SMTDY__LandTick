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

import ModalBuyTicket from "./modal/ModalBuyTicket";
import InfoModal from "./modal/InfoModal ";
import { formatDate, time, getTime } from "../config/apputils";

// import { BrowserRouter as Router, Link } from 'react-router-dom';

class Landing extends Component {
  constructor(props) {
    super();
    this.state = {
      showMOdalBuy: false,
      checked: false,
      formateDate: "",
      formatDay: "",
      startTime: "",
      endTime: "",
      price: "",
      idTicket: "",
      data: "",
      asal: "",
      dataStart: "",
      tujuan: "",
      adult: "",
      child: "",
      pulangpegi: 1,
      pesan: "",
      ticket: [],

      errasal: "",
      errtujuan: "",
      erradult: "",
      errchild: "",
      errdate: "",

      // getStatusModal: false
      showModalInfo: false
    };
  }

  changLocation = () => {
    this.setState({
      tujuan: this.state.asal,
      asal: this.state.tujuan
    });
  };

  componentDidMount() {
    this.props.getUser();
    this.props.getTiket();
  }

  handleModalBuyTicket = (data, id, date, day, start, end, pre) => {
    this.setState(
      {
        showMOdalBuy: !this.state.showMOdalBuy,
        data: data,
        formateDate: date,
        formatDay: day,
        startTime: start,
        endTime: end,
        price: pre,
        idTicket: id,

        asal: "",
        dataStart: "",
        tujuan: "",
        adult: "",
        child: "",
        pesan: ""
      }
      // () => console.log(this.state.showMOdalBuy)
    );
  };

  handleChange = e => {
    if (e.target.name == "pp") {
      if (this.state.checked) {
        this.setState({
          pulangpegi: 0
        });
      } else {
        this.setState({
          pulangpegi: 1
        });
      }
    }
    this.setState({
      checked: !this.state.checked,
      [e.target.name]: e.target.value
    });
  };

  handleSubmitSearch = e => {
    e.preventDefault();

    const ticket = this.props.tiketR.getTiket.ticket;
    let dataSearch = [];
    if (this.state.asal) {
      this.setState({
        errasal: ""
      });
      if (this.state.tujuan) {
        this.setState({
          errtujuan: ""
        });
        if (this.state.dataStart) {
          this.setState({
            errdate: ""
          });
          if (ticket.length > 0) {
            ticket.map((val, key) => {
              let date = val.date_start;
              const dateNow = new Date().toISOString().slice(0, 10);

              if (
                date.substr(0, 10) === this.state.dataStart ||
                (val.start_station.toLowerCase() ===
                  this.state.asal.toLowerCase() &&
                  val.destination_station.toLowerCase() ===
                    this.state.tujuan.toLowerCase() &&
                  date >= dateNow)
              ) {
                dataSearch = [...dataSearch, val];
              }
              if (!dataSearch.length) {
                this.setState({
                  showModalInfo: !this.state.showModalInfo,
                  status: "no tiket !"
                });
              }
            });
          }
          this.setState({
            ticket: dataSearch
          });
          console.log(dataSearch);
          console.log(this.state.pesan);
          if (!dataSearch.length) {
            this.setState({
              showModalInfo: !this.state.showModalInfo,
              pesan: "no tiket !"
            });
          }
        } else {
          this.setState({
            errdate: "pilih tanggal !"
          });
        }
      } else {
        this.setState({
          errtujuan: "bagian ini harus di isi !"
        });
      }
    } else {
      this.setState({
        errasal: "bagian ini harus di isi !"
      });
    }
  };

  handleModal = () => {
    this.setState({
      showModalInfo: !this.state.showModalInfo,
      asal: "",
      dataStart: "",
      tujuan: "",
      adult: "",
      child: ""
    });
  };

  showHandleBtnBuy = () => {
    this.setState({
      showModalInfo: !this.state.showModalInfo,
      pesan: "harap isi pencarian !"
    });
  };

  handleWarningLogin = () => {
    this.setState({
      showModalInfo: !this.state.showModalInfo,
      pesan: "harap Login ya !"
    });
  };

  render() {
    const token = localStorage.getItem("token");

    let ticket = this.props.tiketR.getTiket.ticket;

    let ticketSearch = this.state.ticket;

    if (ticketSearch.length > 0) {
      ticket = ticketSearch;
    } else {
      ticket = ticket;
    }

    let status;
    // console.log(this.props.get_User);
    if (token) {
      if (this.props.get_User.getUser[0]) {
        if (this.props.get_User.getUser[0].data) {
          status = this.props.get_User.getUser[0].data.userAut.role;
        }
      }
    }
    if (status === "admin") {
      return <Redirect to="/mydashboard" />;
    }
    // console.log(this.state.pesan);
    return (
      <div>
        <InfoModal
          status="204"
          show={this.state.showModalInfo}
          hidemodal={this.handleModal}
          pesan={this.state.pesan}
        />
        <ModalBuyTicket //show modal buy
          showModalBuy={this.state.showMOdalBuy}
          handleModalBuyTicket={this.handleModalBuyTicket}
          dataFromLanding={this.state}
          data={this.state.data}
          date={this.state.formateDate}
          day={this.state.formatDay}
          start={this.state.startTime}
          end={this.state.endTime}
          price={this.state.price}
          id={this.state.idTicket}
        />
        <HeaderPrimary />

        <Jumbotron />

        <div className="">
          <div className="container order-panel">
            <form onSubmit={this.handleSubmitSearch}>
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
                    <label htmlFor="inputAsal">Asal</label>
                    <input
                      value={this.state.asal}
                      name="asal"
                      type="text"
                      className="form-control input"
                      id="inputAsal"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errasal ? this.state.errasal : ""}
                    </Form.Text>
                    {/* using select */}
                    {/* <select
                      value={this.state.asal}
                      name="asal"
                      type="text"
                      className="form-control input"
                      id="inputAsal"
                      onChange={this.handleChange}
                      // console.log(ticket);
                    >
                      {ticket
                        ? ticket.map((val, key) => (
                            <option value={val.start_station} key={key}>
                              {val.start_station}
                            </option>
                          ))
                        : ""}
                    </select> */}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="inputTglOtw">Tanggal Berangkat</label>

                        <input
                          value={this.state.dataStart}
                          name="dataStart"
                          type="date"
                          className="form-control input"
                          id="inputTglOtw"
                          onChange={this.handleChange}
                        />
                        <Form.Text className="text-danger">
                          {this.state.errdate ? this.state.errdate : ""}
                        </Form.Text>
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
                          value={!this.state.checked}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
                {/* ===== */}
                <div className="col-md-1 mbl-arrow">
                  <div>
                    <span className="clr-orange">
                      {" "}
                      <FontAwesomeIcon
                        className="clr-orange mbl-arrow-icon "
                        onClick={this.changLocation}
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
                    <label htmlFor="inputTujuan">Tujuan</label>

                    <input
                      value={this.state.tujuan}
                      type="type"
                      name="tujuan"
                      className="form-control input"
                      id="inputTujuan"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errtujuan ? this.state.errtujuan : ""}
                    </Form.Text>
                    {/* using select */}
                    {/* <select
                      value={this.state.tujuan}
                      type="type"
                      name="tujuan"
                      className="form-control input"
                      id="inputTujuan"
                      onChange={this.handleChange}
                    >
                      {console.log(ticket)}
                      {ticket
                        ? ticket.map((val, key) => (
                            <option value={val.destination_station} key={key}>
                              {val.destination_station}
                            </option>
                          ))
                        : ""}
                    </select> */}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="inputAdult">Dewasa</label>

                        <select
                          value={this.state.adult}
                          name="adult"
                          className="form-control input"
                          id="inputAdult"
                          onChange={this.handleChange}
                        >
                          <option>Pilih</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <Form.Text className="text-danger">
                          {this.state.erradult ? this.state.erradult : ""}
                        </Form.Text>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="inputEmail">Anak-anak</label>
                        <select
                          value={this.state.child}
                          name="child"
                          className="form-control input"
                          onChange={this.handleChange}
                        >
                          <option>Pilih</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <Form.Text className="text-danger">
                          {this.state.errchild ? this.state.errchild : ""}
                        </Form.Text>
                      </div>
                    </div>
                    <div className="col-md-4 mbl-btn-search">
                      <Button
                        className=" color-white mr-2 register cari-ticket"
                        type="submit"
                      >
                        Cari Tiket
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* list  */}
        <div className="container mb-5">
          {/* ============== */}
          <div className="row justify-content-left mt-4">
            <div className="col-md-2 text-center">Nama Kereta</div>
            <div className="col-md-2 text-center">Berangkat</div>
            <div className="col-md-1 text-center"></div>
            <div className="col-md-2 text-center">Tiba</div>
            <div className="col-md-1 text-center">Durasi</div>
            <div className="col-md-2 text-center">Harga PerOrang</div>
          </div>
          {/* tiket */}
          {ticket ? (
            ticket.map((val, i) => (
              <div className="" key={i} id={val.id}>
                <div
                  className="row justify-content-left mt-3 field-list box-shadow-2"
                  onClick={this.handleShowTicket}
                >
                  <div className="col-md-2 text-center">
                    <h6 className="bold-8">{val.name_train}</h6>
                    <p>{val.train.type_train}</p>
                  </div>
                  <div className="col-md-2 text-center">
                    <h6 className="bold-8">{time(val.start_time)}</h6>
                    <p>{val.start_station}</p>
                  </div>
                  <div className="col-md-1 text-center">
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
                  <div className="col-md-2 text-center">
                    <h6 className="bold-8">{time(val.arival_time)}</h6>
                    <p>{val.destination_station}</p>
                  </div>
                  <div className="col-md-1 text-center">
                    <h6 className="bold-8">
                      {getTime(val.start_time, val.arival_time)}
                    </h6>
                  </div>
                  <div className="col-md-2 text-center">
                    <h6 className="bold-8 clr-orange mt-3">Rp. {val.price} </h6>
                  </div>
                  <div className="text-center opsi-list-tiket">
                    <div className="box-logo-invoice bg-primary-90 logopay top">
                      {/* {val.date_start.substr(0, 10)}
                      ds */}
                      <h6 className="drop-shadow-2">
                        {formatDate(val.date_start.substr(0, 10))}
                      </h6>
                    </div>
                  </div>

                  {token ? (
                    // ticketSearch.length > 0 ? (
                    <div
                      className="text-center opsi-list-bottom"
                      onClick={() =>
                        this.handleModalBuyTicket(
                          val,
                          val.id,
                          formatDate(val.date_start.substr(0, 10)),
                          val.date_start,
                          time(val.start_time),
                          time(val.arival_time),
                          val.price
                        )
                      }
                    >
                      <div className="box-logo-invoice bg-primary-90 logopay bottom">
                        <h6 className="drop-shadow-2">Beli</h6>
                      </div>
                    </div>
                  ) : (
                    // ) : (
                    // <div
                    //   className="text-center opsi-list-bottom"
                    //   onClick={this.showHandleBtnBuy}
                    // >
                    //   <div className="box-logo-invoice bg-primary-90 logopay bottom">
                    //     <h6 className="drop-shadow-2">Beli</h6>
                    //   </div>
                    // </div>
                    // )
                    <div
                      className="text-center opsi-list-bottom"
                      onClick={this.handleWarningLogin}
                    >
                      <div className="box-logo-invoice bg-primary-90 logopay bottom">
                        <h6 className="drop-shadow-2">Beli</h6>
                      </div>
                    </div>
                  )}
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
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    get_User: state.get_User,
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
