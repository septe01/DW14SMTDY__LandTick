import React, { Component } from "react";
import { Button, Row, Col, Container, Form, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      username: "",
      password: "",

      redirect: false,
      resUsername: "",
      resstatus: "",

      errmail: "",
      errpassword: "",
      loader: true
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let userLogin = {
      username: this.state.username,
      password: this.state.password
    };
    if (userLogin.username != "") {
      this.setState({
        errmail: ""
      });
      if (userLogin.password != "") {
        this.setState({
          errpassword: ""
        });
        this.setState({
          loader: false
        });
        await Axios.post("http://localhost:5004/api/v1/login", userLogin)
          .then(response => {
            if (typeof response.data.token !== "undefined") {
              localStorage.setItem("token", response.data.token);
              const { status, username } = response.data;
              // console.log(status, username);

              this.setState({
                resUsername: username,
                resstatus: status,
                redirect: true,
                loader: !this.state.loader
              });

              const data = {
                status,
                username
              };

              this.props.dataUser(data);
              // window.location.reload(false);
            }
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response);
              if (error.response.data.message != "Password Not Found") {
                this.setState({
                  errmail: error.response.data.message
                });
              } else {
                this.setState({
                  errpassword: error.response.data.message
                });
              }

              // console.log(error.response.data);
            }
          });
      } else {
        this.setState({
          errpassword: "password required !"
        });
      }
    } else {
      this.setState({
        errmail: "username required !"
      });
    }
  };

  render() {
    return (
      <>
        {this.state.redirect ? <Redirect to="/home" /> : ""}
        <Button
          className=" btn-log color-bg"
          onClick={this.handleShow}
          style={{ fontWeight: "1000" }}
        >
          Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1 className="color-pink">Login</h1>
                {/* <span className="close" onClick={this.handleClose}>
                  X
                </span> */}
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="justify-content-md-center">
              <Col md="11" className="body-modal">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      className="input"
                      name="username"
                      type="text"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errmail ? `${this.state.errmail} ` : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="input"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errpassword
                        ? `${this.state.errpassword} `
                        : ""}
                    </Form.Text>
                  </Form.Group>

                  <div className="justify-content-center d-flex">
                    {/* <Link to="index"> */}
                    <Button
                      type="submit"
                      className=" btn-log color-bg color-white"
                      style={{
                        fontWeight: "1000",
                        width: "100%",
                        borderRadius: "25px"
                      }}
                    >
                      Login
                    </Button>

                    {/* <button
                      className="discoveri-close color-bg mt-3"
                      type="submit"
                    >
                      Login
                      {this.state.loader ? (
                        ""
                      ) : (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/loader3.png"
                          }
                          width="300"
                          height="250"
                          className="d-inline-block align-top loader-min"
                          alt="MyLogo"
                          style={{
                            filter: "drop-shadow(0px 0px 2px black)",
                            position: "fixed",
                            right: "10px",
                            width: "25px",
                            height: "25px",
                            margin: "auto"
                          }}
                        />
                      )}
                    </button> */}
                    {/* </Link> */}
                  </div>
                  <div
                    className="text-center mt-4"
                    style={{
                      marginBottom: "-20px"
                    }}
                  >
                    <p
                      className="bold-5"
                      style={{
                        color: "rgba(161, 161, 171, 1)"
                      }}
                    >
                      Belum Punya Akun ?{" "}
                      <span className="klik-me">Klik disini</span>
                    </p>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

export default LoginModal;
