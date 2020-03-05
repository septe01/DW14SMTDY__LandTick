import React, { Component } from "react";
import { Form, Container, Row, Modal, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class ModalInvoice extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <>
        {/* {this.state.redirect ? <Redirect to="/home" /> : ""}
        <Button
          className=" btn-log color-bg"
          onClick={this.handleShow}
          style={{ fontWeight: "1000" }}
        >
          Login
        </Button> */}
        <FontAwesomeIcon
          icon={faEdit}
          className="opsi-admin-list"
          onClick={this.handleShow}
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
                      placeholder="Anton"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicTujuan">
                    <Form.Control
                      className="input"
                      name="tujuan"
                      type="text"
                      disabled
                      placeholder="Surabaya"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicStruk">
                    <Form.Control
                      className="input"
                      name="struk"
                      type="text"
                      disabled
                      placeholder="bca.jpg"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicSelect">
                    <Form.Control
                      className="input"
                      name="opsi"
                      type="text"
                      placeholder="Approved"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger"></Form.Text>
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

export default ModalInvoice;
