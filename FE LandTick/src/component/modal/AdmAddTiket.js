import React, { Component } from "react";
import { Form, Container, Row, Modal, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";

class AdmAddTiket extends Component {
  constructor(props) {
    super();
    this.state = {
      showAdd: false
    };
  }
  handleClose = () => {
    this.setState({ showAdd: false });
  };
  handleShow = () => {
    this.setState({ showAdd: true });
  };
  render() {
    console.log(this.props.showAdd);
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
        {/* <FontAwesomeIcon
          icon={faInfoCircle}
          className="opsi-admin-list"
          onClick={this.handleShow}
        /> */}

        <div className="add-ticket-adm" onClick={() => this.handleShow}>
          <span className="ml-4 mr-3">
            <FontAwesomeIcon icon={faTicketAlt} />
          </span>
          <span>Tambah Tiket</span>
        </div>

        <Modal
          show={this.state.showAdd}
          onHide={this.handleClose}
          size="lg"
          className="modal-add-pay"
        >
          <div className="box-logo-invoice bg-primary-90 ">
            <img
              alt="logo"
              className="front-logo logo-invoice"
              src="http://localhost:3000/assets/images/logo.png"
            />
          </div>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal head-invoice">
                <h1 className="invoice drop-shadow-2">Tambah Tiket</h1>
                {/* <span className="close" onClick={this.handleClose}>
                  X
                </span> */}
              </Col>
            </Row>
          </Container>

          <Container>
            <div className="container">
              <Row className="justify-content-md-center mt-2">
                <Col className="">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicNama">
                      <Form.Control
                        className="input"
                        type="text"
                        name="nm_keretea"
                        placeholder="Nama Kereta"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.errbreeder ? this.state.errbreeder : ""} */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicJenis">
                      <div className="form-group">
                        <select
                          className="form-control input"
                          name="jenis"
                          id="jenis"
                          onChange={this.handleChange}
                        >
                          <option>Jenis Kereta</option>
                          <option value="male">Laki</option>
                          <option value="female">perempuan</option>
                        </select>
                      </div>
                      <Form.Text className="text-danger">
                        {/* {this.state.errgender ? this.state.errgender : ""} */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicStartDate">
                      <Form.Control
                        className="input"
                        type="date"
                        name="start_date"
                        placeholder="Tanggal Berangkat"
                        onChange={this.handleChange}
                      />

                      <Form.Text className="text-danger">
                        {/* {this.state.errbreeder ? this.state.errbreeder : ""} */}
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicStKeberangakatan">
                      <Form.Control
                        className="input"
                        name="st_keberangkatan"
                        type="text"
                        placeholder="Stasiun Keberangkatan"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.erremail ? this.state.erremail : ""} */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicJamStart">
                      <Form.Control
                        className="input"
                        name="start"
                        type="time"
                        placeholder="Jam Keberangkatan"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.errpassword ? this.state.errpassword : ""} */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicStTujuan">
                      <Form.Control
                        className="input"
                        name="st_tujuan"
                        type="text"
                        placeholder="Stasiun Tujuan"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.errphone ? this.state.errphone : ""} */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicJamTiba">
                      <Form.Control
                        className="input"
                        name="jam_tiba"
                        type="time"
                        placeholder="Jam Tiba"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.errphone ? this.state.errphone : ""} */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicHargaTiket">
                      <Form.Control
                        className="input"
                        name="harga_tiket"
                        type="text"
                        placeholder="Harga Tiket"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.errphone ? this.state.errphone : ""} */}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicQTY">
                      <Form.Control
                        className="input"
                        name="qty"
                        type="text"
                        placeholder="qty"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.errphone ? this.state.errphone : ""} */}
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
          {/* {console.log(this.props.userR)} */}
        </Modal>
      </>
    );
  }
}

export default AdmAddTiket;
