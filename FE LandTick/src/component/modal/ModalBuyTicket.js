import React, { Component } from "react";
import { Button, Row, Col, Container, Form, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

import { getTiketByID } from "../../_actions/tiketA";
import { connect } from "react-redux";
import RegisterModal from "./RegisterModal";

class ModalBuyTicket extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      show: true,

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

  componentDidMount() {
    console.log(this.props.id);
    this.props.getTiketByID(this.props.id);
  }

  handleClose = e => {
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

        this.props
          .login(userLogin)
          .then(res => {
            const { status, token, username } = res.action.payload.data;
            this.setState({ show: false });
            localStorage.setItem("token", token);
            if (status === "admin") {
              document.location.reload(true);
              return <Redirect to="/mydashboard" />;
            } else {
              document.location.reload(true);
              return <Redirect to="/" />;
            }
            // console.log(res.action.payload.data);
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

  // getTicket = id => {
  //   this.props.getTiketByID(id);
  // };

  render() {
    // console.log(this.props.id.name_train);
    return (
      <>
        <Modal
          show={this.props.showModalBuy}
          onHide={this.props.handleModalBuyTicket}
        >
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1 className="color-pink">Beli Tiket</h1>
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
                      Beli
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
            {console.log(this.props.tiketR)}
          </Container>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    tiketR: state.tiketR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTiketByID: id => dispatch(getTiketByID(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuyTicket);
