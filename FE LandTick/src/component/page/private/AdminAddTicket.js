import React, { Component } from "react";
import HeaderPrimary from "../../template/HeaderPrimary";
import Footer from "../../template/Footer";
import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

class AdminAddTicket extends Component {
  constructor(props) {
    super();
    this.props = {};
  }
  handleChange = () => {
    // alert("ok");
  };
  handleSubmit = () => {
    alert("ok");
  };
  render() {
    return (
      <div>
        <HeaderPrimary />
        <div className="container adm-add-ticket">
          <div>
            <h2 className="title-list-transaksi mt-4">Tambah Tiket</h2>
          </div>
          <div className="container">
            <Row className="justify-content-md-center mt-4 mb-5">
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
                      Simpan
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminAddTicket;
