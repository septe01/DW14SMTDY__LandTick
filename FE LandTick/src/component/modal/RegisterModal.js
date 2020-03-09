import React, { Component } from "react"; //useState
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
// data

// import { connect } from "react-redux";

import Axios from "axios";
import { Redirect } from "react-router-dom";

class RegisterModal extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      address: "",
      phone: "",
      gender: "",
      password: "",
      email: "",
      username: "",
      nama_lengkap: "",

      redirect: false,

      erraddress: "",
      errphone: "",
      errgender: "",
      errpassword: "",
      erremail: "",
      errusername: "",
      errbreeder: ""
    };
  }

  handleModal() {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
    document.location.reload(false);
    return <Redirect to="/" />;
  };

  // componentDidMount() {

  // }

  handleChange = e => {
    console.log({ [e.target.name]: [e.target.value] });
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();
    // valildate
    //validate email
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (this.state.nama_lengkap != "") {
      this.setState({
        errbreeder: ""
      });
      if (this.state.username != "") {
        this.setState({
          errusername: ""
        });

        if (this.state.email != "") {
          this.setState({
            erremail: ""
          });
          if (validEmailRegex.test(this.state.email)) {
            this.setState({
              erremail: ""
            });
            if (this.state.password != "") {
              this.setState({
                errpassword: ""
              });
              if (this.state.password.length < 6) {
                this.setState({
                  errpassword: ""
                });

                if (this.state.gender != "") {
                  this.setState({
                    errgender: ""
                  });
                  if (this.state.phone != "") {
                    this.setState({
                      errphone: ""
                    });
                    if (this.state.address != "") {
                      this.setState({
                        erraddress: ""
                      });

                      // --- send data to server
                      const regData = {
                        name: this.state.nama_lengkap[0],
                        username: this.state.username[0],
                        email: this.state.email[0],
                        password: this.state.password[0],
                        gender: this.state.gender[0],
                        phone: this.state.phone[0],
                        address: this.state.address[0]
                      };
                      console.log(regData);
                      // http://localhost:5001/api/v1/register
                      // https://breednder-api.herokuapp.com/api/v1/register
                      Axios.post(
                        "http://localhost:5004/api/v1/register",
                        regData
                      ).then(response => {
                        console.log(response.data);
                        if (typeof response.data.token !== "undefined") {
                          localStorage.setItem("token", response.data.token);
                          if (response.data.status === "admin") {
                            document.location.reload(true);
                            this.hideModal();
                            return <Redirect to="/mydashboard" />;
                          } else {
                            document.location.reload(true);
                            this.hideModal();
                            return <Redirect to="/" />;
                          }
                        }
                        this.setState({
                          errusername: response.data.message
                        });
                      });
                    } else {
                      this.setState({
                        erraddress: "address required !"
                      });
                    }
                  } else {
                    this.setState({
                      errphone: "no hp required !"
                    });
                  }
                } else {
                  this.setState({
                    errgender: "jenis kelamin required !"
                  });
                }
              } else {
                this.setState({
                  errpassword: "password minimum 6 charackter !"
                });
              }
            } else {
              this.setState({
                errpassword: "password required !"
              });
            }
          } else {
            this.setState({
              erremail: "email not valid"
            });
          }
        } else {
          this.setState({
            erremail: "email required !"
          });
        }
      } else {
        this.setState({
          errusername: "username required !"
        });
      }
    } else {
      this.setState({
        errbreeder: "nama lengkap required !"
      });
    }
  };

  render() {
    return (
      <>
        {/* <button className="btn-reg color-bg" onClick={() => this.handleModal()}>
          Register
        </button> */}

        {this.props.klikme ? (
          <span onClick={() => this.handleModal()}>Klik me</span>
        ) : (
          <Button
            className=" color-white mr-2 register"
            onClick={() => this.handleModal()}
          >
            Register
          </Button>
        )}

        {/* username, name hapus*/}

        <Modal show={this.state.show} onHide={this.hideModal}>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1>Daftar</h1>
                {/* <span className="close" onClick={() => this.hideModal()}>
                  X
                </span> */}
              </Col>
            </Row>
          </Container>

          <Container>
            <div className="box-reg-pertama">
              <Row className="justify-content-md-center box-reg-kedua">
                <Col md="11" className="body-modal">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicUser">
                      <Form.Control
                        className="input"
                        type="text"
                        name="nama_lengkap"
                        placeholder="Nama Lengkap"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {this.state.errbreeder ? this.state.errbreeder : ""}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicUserName">
                      <Form.Control
                        className="input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                      />

                      <Form.Text className="text-danger">
                        {this.state.errusername ? this.state.errusername : ""}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        className="input"
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {this.state.erremail ? this.state.erremail : ""}
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
                        {this.state.errpassword ? this.state.errpassword : ""}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicGender">
                      <div className="form-group">
                        <select
                          className="form-control input"
                          name="gender"
                          id="gender"
                          onChange={this.handleChange}
                        >
                          <option>Pilih Jenis kelamin</option>
                          <option value="male">Laki</option>
                          <option value="female">perempuan</option>
                        </select>
                      </div>
                      <Form.Text className="text-danger">
                        {this.state.errgender ? this.state.errgender : ""}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                      <Form.Control
                        className="input"
                        name="phone"
                        type="phone"
                        placeholder="Telp"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {this.state.errphone ? this.state.errphone : ""}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicAddress">
                      <Form.Control
                        className="input"
                        name="address"
                        type="text"
                        placeholder="Address Breeder"
                        as="textarea"
                        rows="3"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {this.state.erraddress ? this.state.erraddress : ""}
                      </Form.Text>
                    </Form.Group>

                    <div className="justify-content-center d-flex mt-2">
                      <Button
                        type="submit"
                        className=" btn-log color-bg color-white"
                        style={{
                          fontWeight: "1000",
                          width: "100%",
                          borderRadius: "25px"
                        }}
                      >
                        Daftar
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </Modal>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {};
// };
// const mapDispatchToProps = dispatch => {
//   return {};
// };

export default RegisterModal;
