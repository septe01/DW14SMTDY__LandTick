import React, { Component } from "react";
import HeaderPrimary from "../../template/HeaderPrimary";
import Footer from "../../template/Footer";
import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTrain } from "../../../_actions/trainsA";
import { storeTiket } from "../../../_actions/tiketA";
import InfoModal from "../../modal/InfoModal ";

class AdminAddTicket extends Component {
  constructor(props) {
    super();
    this.state = {
      nm_kereta: "",
      type_kereta: "",
      start_date: "",
      st_keberangkatan: "",
      waktu_start: "",
      st_tujuan: "",
      jam_tiba: "",
      harga_tiket: "",
      qty: "",
      getStatusModal: false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name_train: this.state.nm_kereta[0],
      type_train: this.state.type_kereta[0],
      date_start: this.state.start_date[0],
      start_station: this.state.st_keberangkatan[0],
      start_time: this.state.waktu_start[0],
      destination_station: this.state.st_tujuan[0],
      arival_time: this.state.jam_tiba[0],
      price: this.state.harga_tiket[0],
      qty: this.state.qty[0]
    };

    this.props.storeTiket(data);
    this.setState({ getStatusModal: true });
  };

  componentDidMount() {
    this.props.getTrain();
  }

  // onBack = e => {
  //   e.preventDefault();
  //   document.location.reload(true);
  //   return <Redirect to="/mydashboard" />;
  // };
  render() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }

    //get tains
    let trains;
    if (this.props.trainsR.getTrains.data) {
      trains = this.props.trainsR.getTrains.data.getTrains;
    }

    return (
      <div>
        <HeaderPrimary />
        {this.state.getStatusModal ? (
          <InfoModal pesan="Data tiket berhasil di tambah !" />
        ) : (
          ""
        )}
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
                      name="nm_kereta"
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
                        name="type_kereta"
                        id="jenis"
                        onChange={this.handleChange}
                      >
                        <option>Jenis Kereta</option>
                        {trains
                          ? trains.map((val, key) => (
                              <option value={val.id} key={key}>
                                {val.type_train}
                              </option>
                            ))
                          : ""}
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
                      name="waktu_start"
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
                      placeholder="Quantity"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {/* {this.state.errphone ? this.state.errphone : ""} */}
                    </Form.Text>
                  </Form.Group>

                  <div className="justify-content-center d-flex mt-2">
                    <Button
                      className=" btn-log color-bg color-white"
                      onClick={() =>
                        (document.location.href =
                          "http://localhost:3000/mydashboard")
                      }
                      style={{
                        fontWeight: "1000",
                        width: "48%",
                        marginRight: "4%",
                        borderRadius: "25px"
                      }}
                    >
                      Kembali
                    </Button>

                    <Button
                      type="submit"
                      className=" btn-log color-bg color-white"
                      style={{
                        fontWeight: "1000",
                        width: "48%",
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
        {console.log(this.props.tiketR.storeTiket)}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trainsR: state.trainsR,
    tiketR: state.tiketR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTrain: () => dispatch(getTrain()),
    storeTiket: data => dispatch(storeTiket(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddTicket);
