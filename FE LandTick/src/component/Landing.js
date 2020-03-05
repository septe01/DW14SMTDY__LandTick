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
  constructor(props) {
    super();
    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };
  }
  dataUser = data => {
    // console.log(data);
  };
  render() {
    return (
      <div>
        <HeaderPrimary dataUser={data => this.dataUser(data)} />
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
          {/* ================ */}
          <div className="">
            <div className="row justify-content-center mt-3 field-list box-shadow-2">
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
          </div>

          <div className="">
            <div className="row justify-content-center mt-3 field-list box-shadow-2">
              <div className="col text-center">
                <h6 className="bold-8">Argo Mills</h6>
                <p>Eksekutif (H)</p>
              </div>
              <div className="col text-center">
                <h6 className="bold-8">16.00</h6>
                <p>Tn. Abang</p>
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
                <h6 className="bold-8">19.05</h6>
                <p>Bogor</p>
              </div>
              <div className="col text-center">
                <h6 className="bold-8">3j 05m</h6>
              </div>
              <div className="col-md-4 text-center">
                <h6 className="bold-8 clr-orange mt-3">Rp. 50.000 </h6>
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
