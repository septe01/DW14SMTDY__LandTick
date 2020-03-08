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
  handleShow = e => {
    this.props.getOrederById(e);
    this.setState({ show: true, id: e });
  };
  componentDidMount() {
    // alert(this.props.data);
    // this.props.getOrederById(this.props.data)
  }

  render() {
    console.log(this.state.id);

    return (
      <>
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="opsi-admin-list"
          // value:{this.props.id}
          onClick={() => this.handleShow(this.props.id)}
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
                        <span>Saturday</span>, 21 Feb 2020
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
                        Argo Willis
                      </span>
                      <p>Executive (H)</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 invoice-name">
                      <span className="kreta mt-2 color-black-7">05.00</span>
                      <p>21 Feb 2020</p>
                    </div>
                    <div className="col-md-6 invoice-name">
                      <div>
                        <span className="kreta mt-2 color-black-7">
                          Jakarta (GMR)
                        </span>
                        <p>Stasiun Gambir</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 invoice-name">
                      <span className="kreta mt-2 color-black-7">23.05</span>
                      <p>21 Feb 2020</p>
                    </div>
                    <div className="col-md-6 invoice-name">
                      <div>
                        <span className="kreta mt-2 color-black-7">
                          Surabaya
                        </span>
                        <p>21 Feb 2020</p>
                      </div>
                    </div>
                  </div>
                  {/* ================== */}
                </div>
                <div className="col-md-5">
                  <div className="struct">
                    <img
                      src="http://localhost:3000/assets/images/transfer.jpg"
                      alt=""
                    />
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
            <div className="adm-i-total p-4">
              <div className="row ">
                <span>Total</span>
                <span className="color-red">Rp. 250.500</span>
              </div>
            </div>
          </Container>
          {/* {console.log(this.props.orderR)} */}
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
// http://localhost:5004/api/v1/order/1
export default connect(mapStateToProp, mapDispatchToProps)(ModalInvoice);
