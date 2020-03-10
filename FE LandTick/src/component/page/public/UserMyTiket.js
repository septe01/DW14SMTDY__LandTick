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

class UserMyTiket extends Component {
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="dashAdmin">
          <HeaderPrimary />

          <div className="container box-heigth-tr mt-5 ">
            <div>
              <h2 className="title-list-transaksi">Tiket Saya</h2>
            </div>

            <div className="container box-pay box-shadow-2">
              <div className="box-logo-invoice bg-primary-90 logopay">
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
                      <span className="bold-7">Saturday</span>, 21 Feb 2020
                    </p>
                    {/* <span className="close" onClick={this.handleClose}>
                  X
                </span> */}
                  </Col>
                </Row>
              </Container>

              <Container className="fill-detail-pay">
                <div className="pr-3 pl-3">
                  <div className="row">
                    {/* ============= */}
                    <div className="col-md-4">
                      <span className="kreta mt-2 color-black-7">
                        Argo Willis
                      </span>
                      <p>Executive (H)</p>
                    </div>
                    <div className="col-md-4">
                      <span className="kreta mt-2 color-black-7">05.00</span>
                      <p>21 Feb 2020</p>

                      <div>
                        <span className="kreta mt-2 color-black-7">23.05</span>
                        <p>21 Feb 2020</p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <span className="kreta mt-2 color-black-7">
                        Jakarta (GMR)
                      </span>
                      <p>Stasiun Gambir</p>
                      <div>
                        <span className="kreta mt-2 color-black-7">
                          Surabaya
                        </span>
                        <p>Stasiun Surabaya</p>
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
                          <p>3214123123112</p>
                        </div>
                        <div className="col-md-3 i-detail-user">
                          <p>Nama Pemesan</p>
                          <p>Anto</p>
                        </div>
                        <div className="col-md-3 i-detail-user">
                          <p>No. Handphone</p>
                          <p>0812123812</p>
                        </div>
                        <div className="col-md-3 i-detail-user">
                          <p>Email</p>
                          <p>anto@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 click-pay">
                      <Link to="/payment" className="click-pay-btn">
                        <Button
                          className=" btn-log color-bg"
                          onClick={this.handleShow}
                          style={{ fontWeight: "1000" }}
                        >
                          Bayar Sekarang
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default UserMyTiket;
