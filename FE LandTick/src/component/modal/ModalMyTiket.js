import React, { Component } from "react";
import { Form, Container, Row, Modal, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import {
  faInfoCircle,
  faExclamationCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getOrederById } from "../../_actions/orderA";
import { getDaye, formatDate } from "../../config/apputils";
class ModalMyTiket extends Component {
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

  render() {
    let dataTiket, dataUser, dataOrder;

    if (this.props.getOrder.getOrderById.data) {
      dataOrder = this.props.getOrder.getOrderById.data;

      dataTiket = this.props.getOrder.getOrderById.data.ticket;
      dataUser = this.props.getOrder.getOrderById.data.user;
    }
    let status;
    if (dataOrder) {
      status = dataOrder.status;
    }

    let date;
    if (dataTiket) {
      date = dataTiket.date_start;
    }
    return (
      <>
        {/* <FontAwesomeIcon
          icon={faInfoCircle}
          className="opsi-admin-list"
          onClick={this.getById}
        /> */}
        <Button
          className=" btn-log color-bg"
          onClick={this.getById}
          style={{ fontWeight: "1000" }}
        >
          Lihat Tiket
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <div className="box-logo-invoice box-logo-mytiket bg-primary-90">
            <img
              alt="logo"
              className="front-logo logo-invoice"
              src="http://localhost:3000/assets/images/logo.png"
            />
          </div>
          <Container fluid>
            <Row className="">
              <Col md="12" className="head-modal head-invoice text-left">
                <h1 className="invoice drop-shadow-2">E-Tiket</h1>
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
                    <div className="col-md-12 invoice-name">
                      <span className="kreta mt-2 color-black-7">
                        Kereta Api
                      </span>
                      <p>
                        <span>{date ? getDaye(date.substr(0, 10)) : ""}</span>,{" "}
                        {date ? formatDate(date.substr(0, 10)) : ""}
                      </p>
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
                      <p>{date ? formatDate(date.substr(0, 10)) : ""}</p>
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
                      <p>{date ? formatDate(date.substr(0, 10)) : ""}</p>
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
                    <img
                      src="http://localhost:3000/assets/images/barcode.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* detail invoice   */}

            <div className="detail-invoice-adm">
              <div className="row pr-3 pl-3 justify-content-center">
                <div className="col-md-4 ">
                  <div className="row">
                    <div className="col-md-3 icons-status">
                      <p>
                        <FontAwesomeIcon
                          icon={faIdCard}
                          className="drop-shadow-2"
                        />
                      </p>
                    </div>
                    <div className="col-md-9 desc">
                      <p>
                        Tunjukkan e-ticket dan identitas para penumpang saat
                        checkin
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="row">
                    <div className="col-md-3 icons-status">
                      <p>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="drop-shadow-2"
                        />
                      </p>
                    </div>
                    <div className="col-md-9 desc">
                      <p>
                        Check-in{" "}
                        <span className="bold-7">paling lambat 90 menit</span>{" "}
                        sebelum keberangkatan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="row">
                    <div className="col-md-3 icons-status">
                      <p>
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                          className="drop-shadow-2"
                        />
                      </p>
                    </div>
                    <div className="col-md-9 desc">
                      <p>Waktu tertera adalah waktu stasiunsetempat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================== */}
            <div className="detail-invoice-adm detail-invoice-mytiket ">
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
          </Container>
        </Modal>
      </>
    );
  }
}

// console.log(this.props.id);

const mapStateToProp = state => {
  return {
    getOrder: state.getOrder
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrederById: id => dispatch(getOrederById(id))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(ModalMyTiket);
