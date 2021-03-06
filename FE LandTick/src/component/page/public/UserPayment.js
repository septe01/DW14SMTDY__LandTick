import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HeaderPrimary from "../../template/HeaderPrimary";

import Footer from "../../template/Footer";
import ModalPaymentBtn from "../../modal/ModalPaymentBtn";
import { getOrederById } from "../../../_actions/orderA";
import { getDaye, formatDate } from "../../../config/apputils";
import Axios from "axios";
import { API } from "../../../config/api";

class UserPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfile: true,
      file: "http://localhost:3000/assets/images/transfer.jpg",
      img: "",
      picture: "",
      icon: true,
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.props.getOrederById(this.props.location.state.id);
    } else {
      this.props.history.goBack();
    }
  }

  handleSubmit = () => {
    const formData = new FormData();
    formData.append("picture", this.state.file);

    const config = {
      headers: API.headers,
    };
    if (this.props.getOrder.getOrderById.data) {
      const id = this.props.getOrder.getOrderById.data.id;
      Axios.patch(`http://localhost:5004/api/v1/upload/${id}`, formData, config)
        .then((response) => {
          console.log(JSON.stringify(response));
        })
        .then((data) => {
          console.log("data", JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  handleChange = (event) => {
    this.setState({
      file: event.target.files[0],
      img: URL.createObjectURL(event.target.files[0]),
      icon: !this.state.icon,
    });
  };

  render() {
    let nik = new Number(Math.random() * 10000000000000 + 1);
    nik = nik.toString().replace(".", "");
    // console.log(this.props.getOrder.getOrderById.data);
    let qty, total_price, name_train, user, ticket, timeStart;

    console.log("order", this.props.getOrder);

    if (this.props.getOrder.getOrderById.data) {
      ticket = this.props.getOrder.getOrderById.data;
      timeStart = this.props.getOrder.getOrderById.data;
      if (timeStart) {
        timeStart = this.props.getOrder.getOrderById.data.ticket;
      }
      total_price = this.props.getOrder.getOrderById.data.total_price;
      user = this.props.getOrder.getOrderById.data.user;
      name_train = this.props.getOrder.getOrderById.data.ticket.name_train;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="dashAdmin">
          <HeaderPrimary />

          <div
            className="container box-heigth-pay-now paynow mt-3"
            style={{
              paddingRight: "0",
            }}
          >
            <div>
              <h2 className="title-list-transaksi">Invoice</h2>
            </div>
            <div className="container">
              <div className="row mb-4">
                <div className="col-md-8">
                  <div className="warning">
                    <div className="row box-pay box-shadow-2 clr-bg-grey">
                      <div className="col-md-2 box-pay-warning">
                        <div className="waning-icon text-center">
                          <FontAwesomeIcon
                            className="text-warning mbl-arrow-icon "
                            icon={faExclamationTriangle}
                            style={{
                              fontSize: "46px",
                              filter:
                                "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
                              boxSizing: "border-box",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-10 box-pay-warning color-black-7 box-shadow-5">
                        <p>
                          Silakan melakukan pembayaran memalui M-Banking,
                          E-Banking dan ATM Ke No.rek Yang Tertera :
                        </p>
                        <p>No.rek : 09812312312 </p>
                      </div>
                    </div>
                  </div>
                  {/* ======================== */}
                  <div className="warning mt-2">
                    <div className="row box-pay box-shadow-2">
                      <div className="box-logo-invoice bg-primary-90">
                        <img
                          alt="logo"
                          className="front-logo logo-invoice"
                          src="http://localhost:3000/assets/images/logo.png"
                        />
                      </div>
                      <div></div>
                      <Container>
                        <div className="mt-3">
                          <div className="row">
                            <table className="tbl-paynow-detail">
                              <thead>
                                <tr>
                                  <th>NIK</th>
                                  <th>Nama Pemesan</th>
                                  <th>No. Handphone</th>
                                  <th>Email</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{nik}</td>
                                  <td>{user ? user.name : ""}</td>
                                  <td>{user ? user.phone : ""}</td>
                                  <td>{user ? user.email : ""}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>
                  {/* =============================== */}
                  <div className="warning mt-2">
                    <div className="row detail-pay-click-now">
                      <div className="col-md-8 pay-click-now">
                        <div className="mt-2">
                          <h4 className="title-list-transaksi">
                            Rincian Harga
                          </h4>
                        </div>
                        <div className="warning mt-2">
                          <div className="row box-pay box-shadow-2">
                            <table className="tbl-paynow-detail total-paynow">
                              <thead>
                                <tr className="drop-shadow-2 color-black-7">
                                  <th>{`${name_train} x ${qty}`}</th>
                                  <th>Rp. {total_price}</th>
                                </tr>
                              </thead>
                              <tbody className="clr-bg-grey">
                                <tr className="drop-shadow-2 color-black-7">
                                  <td>Total</td>
                                  <td>
                                    <h5 className="bold-7">
                                      Rp. {total_price}
                                    </h5>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/* ========= Button ========== */}
                        <ModalPaymentBtn
                          data={this.state.data}
                          submit={this.handleSubmit}
                        />
                      </div>
                      <div className="col-md-4 text-right prof-img-click-now">
                        <div className="struct payment-prof-img">
                          <img
                            className="box-shadow-2"
                            src={this.state.img}
                            alt=""
                          />
                          {this.state.inputfile ? (
                            // <Form>
                            <Form
                              action="/profile"
                              method="post"
                              encType="multipart/form-data"
                              className="input-file"
                            >
                              <input
                                type="file"
                                id="picture"
                                name="picture"
                                accept="image/*"
                                className="upload-btn-wrapper"
                                onChange={this.handleChange}
                              />
                              <i class="fa fa-id-card fa-3x icons"></i>
                              {this.state.icon ? (
                                <FontAwesomeIcon
                                  icon={faUpload}
                                  className="icon-upload-file"
                                />
                              ) : (
                                ""
                              )}
                            </Form>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 pay-now-right-col pl-4">
                  <div className="row pl-2">
                    <div className="col-md-8 color-bg-grey-8 pt-2 pb-2">
                      <h4 className=" drop-shadow-2 bold-8 mt-2">Kereta Api</h4>
                      <p className="color-black-7 drop-shadow-2">
                        <span className="bold-7">
                          {ticket
                            ? `${getDaye(ticket.ticket.date_start)}, `
                            : ""}{" "}
                        </span>

                        <span>
                          {ticket
                            ? formatDate(ticket.ticket.date_start.substr(0, 10))
                            : ""}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-4 color-bg-grey-8 pt-2 pb-2">
                      <div className="code-pay-click-now">
                        <img
                          src="http://localhost:3000/assets/images/barcode.png"
                          alt="code"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 clr-bg-grey">
                      <span className="kreta mt-2 color-black-8 drop-shadow-2">
                        {name_train}
                      </span>
                      <p>{ticket ? ticket.ticket.train.type_train : ""}</p>
                    </div>
                    {/* ====================== */}
                    <div className="col-md-6 clr-bg-grey">
                      <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                        {timeStart ? timeStart.start_time.substr(0, 5) : ""}
                      </span>

                      <p>
                        {timeStart
                          ? formatDate(timeStart.date_start.substr(0, 10))
                          : ""}
                      </p>

                      <div>
                        <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                          {timeStart ? timeStart.arival_time.substr(0, 5) : ""}
                        </span>
                        <p>
                          {timeStart
                            ? formatDate(timeStart.date_start.substr(0, 10))
                            : ""}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 clr-bg-grey">
                      <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                        {timeStart ? timeStart.start_station : ""}
                      </span>
                      <p>St. {timeStart ? timeStart.start_station : ""}</p>
                      <div>
                        <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                          {timeStart ? timeStart.destination_station : ""}
                        </span>
                        <p>
                          St. {timeStart ? timeStart.destination_station : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getOrder: state.getOrder,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrederById: (getOrder) => dispatch(getOrederById(getOrder)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPayment);
