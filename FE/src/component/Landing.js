import React, { Component } from "react";
import { Row, Col, Navbar, Nav, Form } from "react-bootstrap"; //import component bootstaps
import Container from "react-bootstrap/Container";
// import Modal from 'react-bootstrap/Modal'
import LoginModal from "./modal/LoginModal";
import RegisterModal from "./modal/RegisterModal";
import { connect } from "react-redux";

// import { BrowserRouter as Router, Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="App-header image">
        <Container className="header">
          <Navbar bg="">
            <Navbar.Brand href="#home">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/Logo2.png"}
                width="250"
                height="50"
                className="d-inline-block align-top"
                alt="MyLogo"
                style={{ filter: "drop-shadow(2px 1px 1px black)" }}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Form inline>
                <LoginModal />
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Container className="center">
          <h1 className="head1-dashboard">
            Swipe <span className="bold">right</span>.
          </h1>
          <h1 className="head1-dashboard">
            Make your pet <span className="bold">happy</span>
          </h1>

          <Row className="justify-content-md-center" style={{ marginTop: 20 }}>
            <Col md="10" className="color">
              <p className="head1-dashboard slug">
                by clicking enter, you agree to{" "}
                <u className="link">our terms.</u> Learn how we process your
                data in our <u className="link">Privacy Policy</u> and{" "}
                <u className="link">Cookie Policy.</u>
              </p>
            </Col>
          </Row>
          {/* <Router><Link to="/sadfasd">index</Link></Router> */}
          <RegisterModal />
        </Container>

        <Container fluid className="footer color-bg">
          <h1 className="head1-dashboard find-trp">FIND YOUR PET’S MATCH</h1>
        </Container>
      </div>
    );
  }
}

export default Landing;
