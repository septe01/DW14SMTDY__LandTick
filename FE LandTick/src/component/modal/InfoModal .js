import React, { Component } from "react";
import { Button, Row, Col, Container, Form, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

class InfoModal extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  handleClose = e => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    // console.log(this.props.status);
    return (
      <>
        {/* <Modal show={this.state.show} onHide={this.handleClose}> */}
        <Modal show={this.props.show} onHide={this.props.hidemodal}>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1 className="color-pink info-dialog">
                  {this.props.status === "204" ? (
                    <FontAwesomeIcon icon={faTimesCircle} />
                  ) : (
                    <FontAwesomeIcon icon={faCheckCircle} />
                  )}
                </h1>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="justify-content-md-center">
              <div className="mb-2 drop-shadow-2">{this.props.pesan}</div>
            </Row>
            <Row className="justify-content-md-center ml-2 mr-2 mt-2 mb-3">
              <Button
                className=" btn-log color-bg"
                // onClick={this.handleClose}
                onClick={this.props.hidemodal}
                style={{ fontWeight: "1000" }}
              >
                Tutup
              </Button>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

export default InfoModal;
