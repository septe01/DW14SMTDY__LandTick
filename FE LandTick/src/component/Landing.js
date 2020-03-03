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

// import { BrowserRouter as Router, Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <HeaderPrimary />
        <Jumbotron />

        <div style={{ position: "relative" }} className="container">
          <div className="container order-panel">
            <div className="row ">
              <div className="col-3">
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
              <div className="col-4">
                <span className="kreta mt-2">Tiket Kereta Api</span>
                <div class="form-group">
                  <label for="inputEmail">Asal</label>
                  <input
                    name="from"
                    type="text"
                    class="form-control"
                    id="inputtext"
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div class="form-group">
                      <label for="inputEmail">Tanggal Berangkat</label>
                      <input
                        name="dataStart"
                        type="date"
                        class="form-control"
                        id="inputEmail"
                      />
                    </div>
                  </div>
                  <div
                    className="col-6"
                    style={{
                      position: "relative"
                    }}
                  >
                    <Form.Group>
                      <Form.Check
                        type="checkbox"
                        label="Pulang Pergi"
                        name="pp"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              {/* ===== */}
              <div className="col-1">
                <div>
                  <span className="clr-orange">
                    <FontAwesomeIcon
                      className="clr-orange"
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
              <div className="col-4">
                <span className="kreta mt-4"></span>
                <div class="form-group mt-2">
                  <label for="inputEmail">Tujuan</label>
                  <input type="to" class="form-control" id="inputEmail" />
                </div>
                <div className="row">
                  <div className="col-4">
                    <div class="form-group">
                      <label for="inputEmail">dewasa</label>
                      <select name="adult" class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group">
                      <label for="inputEmail">child</label>
                      <select name="child" class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4">
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
        <div
          className="container"
          style={{
            marginTop: "220px"
          }}
        >
          {/* ============== */}
          <div className="row justify-content-center">
            <div className="col text-center">Nama Kereta</div>
            <div className="col text-center">Berangkat</div>
            <div className="col text-center"></div>
            <div className="col text-center">Tiba</div>
            <div className="col text-center">Durasi</div>
            <div className="col-md-4 text-center">Harga PerOrang</div>
          </div>
          {/* ================ */}
          <div className="mb-5">
            <div className="row justify-content-center mt-3 field-list">
              <div className="col text-center">
                <h6 className="bold-8">Argo Mills</h6>
                <p>Eksekutif (H)</p>
              </div>
              <div className="col text-center">
                <h6 className="bold-8">Argo Mills</h6>
                <p>Eksekutif (H)</p>
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
                <h6 className="bold-8">Argo Mills</h6>
                <p>Eksekutif (H)</p>
              </div>
              <div className="col text-center">
                <h6 className="bold-8">Argo Mills</h6>
              </div>
              <div className="col-md-4 text-center">
                <h6 className="bold-8 clr-orange mt-3">Rp. 1000000 </h6>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Landing;
