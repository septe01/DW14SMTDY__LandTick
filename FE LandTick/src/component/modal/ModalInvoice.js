import React, { Component } from "react";
import { Form, Container, Row, Modal, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getOrederById } from "../../_actions/orderA";

class ModalInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: ""
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  componentDidMount() {
    // alert("ok");
    // this.props.getOrederById(this.props.id);
  }

  getById = e => {
    this.props.getOrederById(this.props.id);
    this.handleShow();
  };

  // format date
  formatDate = dateStr => {
    let dArr = dateStr.split("-"); // ex input "2010-01-18"
    return dArr[2] + " " + dArr[1] + " " + dArr[0]; //ex out: "18/01/10"
  };
  // get day
  getDaye = day => {
    let date = new Date(day);
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    return days[date.getDay()];
  };

  render() {
    let dataTiket, dataUser, dataOrder;

    if (this.props.orderR.getOrderById.data) {
      dataOrder = this.props.orderR.getOrderById.data;
      dataTiket = this.props.orderR.getOrderById.data.ticket;
      dataUser = this.props.orderR.getOrderById.data.user;

      // dataUser = this.props.orderR.getOrderById.data.ticket
    }
    let status;
    if (dataOrder) {
      status = dataOrder.status;
    }
    console.log(status);
    let date;
    if (dataTiket) {
      date = dataTiket.date_start;
    }
    return (
      <>
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="opsi-admin-list"
          onClick={this.getById}
        />

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <div className="box-logo-invoice bg-primary-90">
            <img
              alt="logo"
              className="front-logo logo-invoice"
              src="http://localhost:3000/assets/images/logo.png"
            />
          </div>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal head-invoice">
                <h1 className="invoice drop-shadow-2">Invoice</h1>
                <p className="color-black-7 drop-shadow-2">
                  Kode Invoice : INV0101
                </p>
                {/* <span className="close" onClick={this.handleClose}>
                  X
                </span> */}
              </Col>
            </Row>
          </Container>

          <Container>
            <div className="pr-3 pl-3">
              <div className="row">
                <div className="col-md-7">
                  {/* ============= */}
                  <div className="row">
                    <div className="col-md-6 invoice-name">
                      <span className="kreta mt-2 color-black-7">
                        Kereta Api
                      </span>
                      <p>
                        <span>
                          {date ? this.getDaye(date.substr(0, 10)) : ""}
                        </span>
                        , {date ? this.formatDate(date.substr(0, 10)) : ""}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="img-code">
                        <img
                          src="http://localhost:3000/assets/images/barcode.png"
                          alt="code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 invoice-name">
                      <span className="kreta mt-2 color-black-7">
                        {dataTiket ? dataTiket.name_train : ""}
                      </span>
                      <p>{dataTiket ? dataTiket.train.type_train : ""}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 invoice-name">
                      <span className="kreta mt-2 color-black-7">05.00</span>
                      <p>{date ? this.formatDate(date.substr(0, 10)) : ""}</p>
                    </div>
                    <div className="col-md-6 invoice-name">
                      <div>
                        <span className="kreta mt-2 color-black-7">
                          {dataTiket ? dataTiket.start_station : ""}
                        </span>
                        <p>st. {dataTiket ? dataTiket.start_station : ""}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 invoice-name">
                      <span className="kreta mt-2 color-black-7">23.05</span>
                      <p>{date ? this.formatDate(date.substr(0, 10)) : ""}</p>
                    </div>
                    <div className="col-md-6 invoice-name">
                      <div>
                        <span className="kreta mt-2 color-black-7">
                          {dataTiket ? dataTiket.destination_station : ""}
                        </span>
                        <p>
                          st. {dataTiket ? dataTiket.destination_station : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ================== */}
                </div>
                <div className="col-md-5">
                  <div className="struct">
                    <img src={dataOrder ? dataOrder.attachment : "-"} alt="" />
                    <div className="container mt-2 justify-content-center d-flex">
                      <div className="col-md-2 text-center">
                        {status === "a" ? (
                          <h6 className="bold-8 clr-green">Approved</h6>
                        ) : (
                          ""
                        )}

                        {status === "c" ? (
                          <h6 className="bold-8 clr-red">Cancle</h6>
                        ) : (
                          ""
                        )}

                        {status === "p" ? (
                          <h6 className="bold-8 clr-orange">Pending</h6>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* detail invoice   */}
            <div className="detail-invoice-adm">
              <div className="row pr-3 pl-3">
                <div className="col-md-3 i-detail-user">
                  <p>NIK</p>
                  <p>3214123123112</p>
                </div>
                <div className="col-md-3 i-detail-user">
                  <p>Nama Pemesan</p>
                  <p>{dataUser ? dataUser.name : ""}</p>
                </div>
                <div className="col-md-3 i-detail-user">
                  <p>No. Handphone</p>
                  <p>{dataUser ? dataUser.phone : ""}</p>
                </div>
                <div className="col-md-3 i-detail-user">
                  <p>Email</p>
                  <p>{dataUser ? dataUser.email : ""}</p>
                </div>
              </div>
            </div>
            <div className="adm-i-total p-4">
              <div className="row ">
                <span>Total</span>
                <span className="color-red">
                  Rp. {dataOrder ? dataOrder.total_price : ""}
                </span>
              </div>
            </div>
          </Container>
        </Modal>
      </>
    );
  }
}

// console.log(this.props.id);

const mapStateToProp = state => {
  return {
    orderR: state.orderR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrederById: id => dispatch(getOrederById(id))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(ModalInvoice);
