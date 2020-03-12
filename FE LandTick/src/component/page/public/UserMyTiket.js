import React, { Component } from "react";
import HeaderPrimary from "../../template/HeaderPrimary";
import Footer from "../../template/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import ModalInvoice from "../../modal/ModalInvoice";
import ModalEditInvoice from "../../modal/ModalEditInvoice";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { myOrder } from "../../../_actions/orderA";
import { formatDate, getDaye } from "../../../config/apputils";
import ModalMyTiket from "../../modal/ModalMyTiket";

class UserMyTiket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goPayment: false,
      id: 0
    };
  }
  componentDidMount() {
    this.props.myOrder();
  }

  handlePayment = id => {
    this.setState({
      id: id,
      goPayment: true
    });
  };

  render() {
    // {console.log(this.props.orderKu.myOrder.data.myticket)}
    let myTiket = [];
    if (this.props.orderKu.myOrder) {
      myTiket = [...myTiket, this.props.orderKu.myOrder.myticket];
    }
    myTiket = myTiket[0];

    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }

    let nik = new Number(Math.random() * 10000000000000 + 1);
    nik = nik.toString().replace(".", "");

    return (
      <div>
        {this.state.goPayment ? (
          <Redirect
            to={{ pathname: "/payment", state: { id: this.state.id } }}
          />
        ) : (
          ""
        )}
        <div className="dashAdmin">
          <HeaderPrimary />

          <div className="container box-heigth-tr mt-5 ">
            <div>
              <h2 className="title-list-transaksi">Tiket Saya</h2>
            </div>
            {/* status */}

            {myTiket ? (
              myTiket.map((val, key) => (
                <div className="container box-pay box-shadow-2 mb-2" key={key}>
                  <div className="box-logo-invoice bg-primary-90 logopay">
                    {console.log(val)}
                    <img
                      alt="logo"
                      className="front-logo logo-invoice"
                      src="http://localhost:3000/assets/images/logo.png"
                    />
                  </div>
                  <Container fluid>
                    <Row className="justify-content-md-center  payment">
                      <Col
                        md="12"
                        className="head-modal head-invoice text-right pay-title"
                      >
                        <h1 className="invoice drop-shadow-2">Kereta Api</h1>
                        <p className="color-black-7 drop-shadow-2">
                          <span className="bold-7">
                            {getDaye(val.ticket.date_start)}
                          </span>
                          , {formatDate(val.ticket.date_start.substr(0, 10))}
                        </p>
                      </Col>
                    </Row>
                  </Container>

                  <Container className="fill-detail-pay">
                    <div className="pr-3 pl-3">
                      <div className="row">
                        {/* ============= */}
                        <div className="col-md-10">
                          <div className="row">
                            <div className="col-md-4">
                              <span className="kreta mt-2 color-black-7">
                                {val.ticket.name_train}
                              </span>
                              <p> {val.ticket.train.type_train}</p>
                            </div>
                            <div className="col-md-4">
                              <span className="kreta mt-2 color-black-7">
                                {val.ticket.start_time.substr(0, 5)}
                              </span>
                              <p>
                                {formatDate(
                                  val.ticket.date_start.substr(0, 10)
                                )}
                              </p>

                              <div>
                                <span className="kreta mt-2 color-black-7">
                                  {val.ticket.arival_time.substr(0, 5)}
                                </span>
                                <p>
                                  {formatDate(
                                    val.ticket.date_start.substr(0, 10)
                                  )}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <span className="kreta mt-2 color-black-7">
                                {val.ticket.start_station}
                              </span>
                              <p>St. {val.ticket.start_station}</p>
                              <div>
                                <span className="kreta mt-2 color-black-7">
                                  {val.ticket.destination_station}
                                </span>
                                <p>St. {val.ticket.destination_station}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-2 text-center">
                          <div className="col-md-2 text-center">
                            {val.status === "a" ? (
                              <h6 className="bold-8 clr-green status-mytiket">
                                Approved
                              </h6>
                            ) : (
                              ""
                            )}
                            {val.status === "c" ? (
                              <h6 className="bold-8 clr-red status-mytiket">
                                Rijected
                              </h6>
                            ) : (
                              ""
                            )}
                            {val.status === "p" ? (
                              <h6 className="bold-8 clr-orange status-mytiket">
                                Pending
                              </h6>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* detail invoice   */}
                    <div>
                      <div className="row">
                        <div className="col-md-10 detail-invoice-adm foot-pay container">
                          <div className="row pr-3 pl-3">
                            <div className="col-md-3 i-detail-user">
                              <p>NIK</p>
                              <p>{nik}</p>
                            </div>
                            <div className="col-md-3 i-detail-user">
                              <p>Nama Pemesan</p>
                              <p>{val.user.user_name}</p>
                            </div>
                            <div className="col-md-3 i-detail-user">
                              <p>No. Handphone</p>
                              <p>{val.user.phone}</p>
                            </div>
                            <div className="col-md-3 i-detail-user">
                              <p>Email</p>
                              <p>{val.user.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 click-pay">
                          {val.status === "p" ? (
                            <Button
                              className=" btn-log color-bg"
                              onClick={() => this.handlePayment(val.id)}
                              style={{ fontWeight: "1000" }}
                            >
                              Bayar Sekarang
                            </Button>
                          ) : (
                            ""
                          )}
                          {val.status === "a" ? (
                            // <Button
                            //   className=" btn-log color-bg"
                            //   // onClick={() => this.handlePayment(1)}
                            //   style={{ fontWeight: "1000" }}
                            // >
                            //   Liat Tiket
                            // </Button>
                            <ModalMyTiket id={val.id} />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              ))
            ) : (
              <div className="container box-pay box-shadow-2"></div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderKu: state.orderKu
  };
};
const mapDispatchToProps = dispatch => {
  return {
    myOrder: () => dispatch(myOrder())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMyTiket);
