import React, { Component } from "react";
import { Form, Container, Row, Modal, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import { getOrederById } from "../../_actions/orderA";
import { updateOreder } from "../../_actions/orderA";
class ModalInvoice extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      status: "",
      error: false
    };
  }

  handleChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.status !== "") {
      const id = this.props.id;

      this.props.updateOreder(id, { status: this.state.status });
    } else {
      this.setState({
        error: true
      });
    }
    // alert(this.state.status);
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  getEdit = () => {
    this.props.getOrederById(this.props.id);
    this.handleShow();
  };

  render() {
    console.log(this.props.id);
    let order;
    if (this.props.orderR.getOrderById.data) {
      order = this.props.orderR.getOrderById.data;
    }

    // console.log(order);
    return (
      <>
        <FontAwesomeIcon
          icon={faEdit}
          className="opsi-admin-list"
          onClick={this.getEdit}
        />

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div className="box-logo-invoice box-logo-invoice-edit  bg-primary-90">
            <img
              alt="logo"
              className="front-logo logo-invoice"
              src="http://localhost:3000/assets/images/logo.png"
            />
          </div>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal head-invoice edit-inv-title">
                <h1 className="invoice  drop-shadow-2">Edit Invoice</h1>
                <p className="color-black-7 drop-shadow-2">
                  {/* Kode Invoice : INV0101 */}
                </p>
                {/* <span className="close" onClick={this.handleClose}>
                  X
                </span> */}
              </Col>
            </Row>
          </Container>
          <Container className="form-adm-edit-inv">
            <Row className="justify-content-md-center">
              <Col md="11" className="body-modal">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicId">
                    <Form.Control className="input" name="id" type="hidden" />
                  </Form.Group>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      className="input"
                      name="name"
                      type="text"
                      disabled
                      placeholder={order ? order.user.name : ""}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicTujuan">
                    <Form.Control
                      className="input"
                      name="tujuan"
                      type="text"
                      disabled
                      placeholder={
                        order ? order.ticket.destination_station : ""
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicStruk">
                    <Form.Control
                      className="input"
                      name="struk"
                      type="text"
                      disabled
                      placeholder={order ? order.attachment : ""}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicSelect">
                    <select
                      className="form-control input"
                      name="status"
                      id="gender"
                      onChange={this.handleChange}
                    >
                      <option>pilih opsi</option>
                      <option value="a">Approved</option>
                      <option value="c">Cancel</option>
                    </select>
                    <Form.Text className="text-danger">
                      {this.state.error ? "required" : ""}
                    </Form.Text>
                  </Form.Group>

                  <div className="justify-content-center d-flex text-right">
                    {/* <Link to="index"> */}
                    <Button
                      type="submit"
                      className=" btn-log color-bg color-white mt-4"
                      style={{
                        fontWeight: "1000",
                        width: "30%",
                        borderRadius: "25px"
                      }}
                    >
                      Simpan
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
          {console.log(this.props.userR)}
        </Modal>
      </>
    );
  }
}

const mapStateToProp = state => {
  return {
    orderR: state.orderR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrederById: id => dispatch(getOrederById(id)),
    updateOreder: (id, data) => dispatch(updateOreder(id, data))
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(ModalInvoice);
