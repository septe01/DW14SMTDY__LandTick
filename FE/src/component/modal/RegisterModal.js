import React, { Component } from "react"; //useState
import { Row, Col, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

// data
import Spesies from "../../data/dataUser.json";
import { connect } from "react-redux";
import { getSpecies } from "./../../_actions/speciesA";
import { getAge } from "../../_actions/ageA";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      breeder: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      name: "",
      gender: "",
      about: "",
      idSpecies: "",
      idAge: "",

      redirect: false,

      errbreeder: "",
      erremail: "",
      errpassword: "",
      errphone: "",
      erraddress: "",
      errname: "",
      errgender: "",
      errabout: "",
      errspecies: "",
      errage: ""
    };
  }

  handleModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  componentDidMount() {
    this.props.getSpecies();
    this.props.getAge();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();

    // valildate
    //validate email
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (this.state.breeder != "") {
      this.setState({
        errbreeder: ""
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
              if (this.state.address != "") {
                this.setState({
                  erraddress: ""
                });
                if (this.state.name != "") {
                  this.setState({
                    errname: ""
                  });
                  if (this.state.gender != "") {
                    this.setState({
                      errgender: ""
                    });
                    if (this.state.about != "") {
                      this.setState({
                        errabout: ""
                      });
                      if (this.state.idSpecies != "") {
                        this.setState({
                          errspecies: ""
                        });
                        if (this.state.idAge) {
                          this.setState({
                            errage: ""
                          });
                          // --- send data to server
                          const regData = {
                            breeder: this.state.breeder[0],
                            email: this.state.email[0],
                            password: this.state.password[0],
                            phone: this.state.phone[0],
                            address: this.state.address[0],
                            pet: {
                              name: this.state.name[0],
                              gender: this.state.gender[0],
                              about_pet: this.state.about[0],
                              spesies: {
                                id: this.state.idSpecies[0]
                              },
                              age: {
                                id: this.state.idAge[0]
                              }
                            }
                          };
                          // http://localhost:5001/api/v1/register
                          // https://breednder-api.herokuapp.com/api/v1/register
                          Axios.post(
                            "https://breednder-api.herokuapp.com/api/v1/register",
                            regData
                          ).then(response => {
                            if (typeof response.data.token !== "undefined") {
                              localStorage.setItem(
                                "token",
                                response.data.token
                              );
                              this.setState({
                                redirect: true
                              });
                              window.location.reload(false);
                            }
                            this.setState({
                              erremail: response.data.message
                            });
                          });
                        } else {
                          this.setState({
                            errage: "age required !"
                          });
                        }
                      } else {
                        this.setState({
                          errspecies: "species required !"
                        });
                      }
                    } else {
                      this.setState({
                        errabout: "about required !"
                      });
                    }
                  } else {
                    this.setState({
                      errgender: "gender required !"
                    });
                  }
                } else {
                  this.setState({
                    errname: "name pet required !"
                  });
                }
              } else {
                this.setState({
                  erraddress: "address required !"
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
        errbreeder: "breeder required !"
      });
    }
  };

  render() {
    return (
      <>
        {this.state.redirect ? <Redirect to="/home" /> : ""}
        <button className="btn-reg color-bg" onClick={() => this.handleModal()}>
          Register
        </button>

        <Modal show={this.state.show}>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1>Register</h1>
                <span className="close" onClick={() => this.hideModal()}>
                  X
                </span>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="justify-content-md-center">
              <Col md="11" className="body-modal">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicUser">
                    <Form.Control
                      type="text"
                      name="breeder"
                      placeholder="Breeder"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errbreeder ? this.state.errbreeder : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
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
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errpassword ? this.state.errpassword : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPhone">
                    <Form.Control
                      name="phone"
                      type="phone"
                      placeholder="Phone Breeder"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errphone ? this.state.errphone : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicAddress">
                    <Form.Control
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

                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Name Pet"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errname ? this.state.errname : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicGender">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="gender"
                        id="gender"
                        onChange={this.handleChange}
                      >
                        <option>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <Form.Text className="text-danger">
                      {this.state.errgender ? this.state.errgender : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicAbout">
                    <Form.Control
                      name="about"
                      type="text"
                      placeholder="About Pet"
                      as="textarea"
                      rows="3"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.errabout ? this.state.errabout : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="idSpecies"
                        id="idSpecies"
                        onChange={this.handleChange}
                      >
                        <option>Spesies Pet</option>
                        {this.props.speciesR.getAll
                          ? this.props.speciesR.getAll.map(species => (
                              <option value={species.id} key={species.id}>
                                {species.name}
                              </option>
                            ))
                          : null}
                      </select>
                    </div>
                    <Form.Text className="text-danger">
                      {this.state.errspecies ? this.state.errspecies : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicAge">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="idAge"
                        id="Age"
                        onChange={this.handleChange}
                      >
                        <option>Age</option>

                        {this.props.ageR.data
                          ? this.props.ageR.data.getAll.map(
                              age => (
                                <option value={age.id} key={age.id}>
                                  {age.name}
                                </option>
                              )
                              // console.log(age.id)
                            )
                          : null}
                      </select>
                    </div>
                    <Form.Text className="text-danger">
                      {this.state.errage ? this.state.errage : ""}
                    </Form.Text>
                  </Form.Group>
                  <div className="justify-content-center d-flex">
                    <button
                      className="discoveri-close color-bg mt-3"
                      type="submit"
                    >
                      Register
                    </button>
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

const mapStateToProps = state => {
  return {
    speciesR: state.speciesR.indexSpecies,
    ageR: state.ageR.indexAge
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies()),
    getAge: () => dispatch(getAge())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
