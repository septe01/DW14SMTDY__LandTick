import React, { Component } from "react";
// import { Button, Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import HeaderPrimary from "../../template/HeaderPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../template/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ModalPaymentBtn from "../../modal/ModalPaymentBtn";

class UserPayment extends Component {
  render() {
    return (
      <div>
        <div className="dashAdmin">
          <HeaderPrimary />

          <div
            className="container box-heigth-pay-now paynow mt-3"
            style={{
              paddingRight: "0"
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
                              boxSizing: "border-box"
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
                                  <td>3214123123112</td>
                                  <td>Anto</td>
                                  <td>0812123812</td>
                                  <td>anto@gmail.com</td>
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
                                  <th>Argo Wilis (Dewasa) x1</th>
                                  <th>Rp.250.000</th>
                                </tr>
                              </thead>
                              <tbody className="clr-bg-grey">
                                <tr className="drop-shadow-2 color-black-7">
                                  <td>Total</td>
                                  <td>
                                    <h5 className="bold-7">Rp.250.000</h5>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <ModalPaymentBtn />
                      </div>
                      <div className="col-md-4 text-right prof-img-click-now">
                        <div className="struct payment-prof-img">
                          <img
                            className="box-shadow-2"
                            src="http://localhost:3000/assets/images/transfer.jpg"
                            alt=""
                          />
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
                        <span className="bold-7">Saturday</span>, 21 Feb 2020
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
                        Argo Willis
                      </span>
                      <p>Executive (H)</p>
                    </div>
                    {/* ====================== */}
                    <div className="col-md-6 clr-bg-grey">
                      <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                        05.00
                      </span>
                      <p>21 Feb 2020</p>

                      <div>
                        <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                          23.05
                        </span>
                        <p>21 Feb 2020</p>
                      </div>
                    </div>

                    <div className="col-md-6 clr-bg-grey">
                      <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                        Jakarta (GMR)
                      </span>
                      <p>Stasiun Gambir</p>
                      <div>
                        <span className="kreta mt-2 color-black-7 color-black-8 drop-shadow-2">
                          Surabaya
                        </span>
                        <p>Stasiun Surabaya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="img-code">
                        <img
                          src="http://localhost:3000/assets/images/barcode.png"
                          alt="code"
                        />
                      </div> */}

          {/* <div className="struct">
                    <img
                      src="http://localhost:3000/assets/images/transfer.jpg"
                      alt=""
                    />
                  </div> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default UserPayment;
