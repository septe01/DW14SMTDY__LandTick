import React, { Component } from "react";
import { Button, Row, Col, Container, Form, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

import { getTiketByID } from "../../_actions/tiketA";
import { connect } from "react-redux";
import RegisterModal from "./RegisterModal";
import { getDaye, formatDate } from "../../config/apputils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { createOrder } from "../../_actions/orderA";

class ModalBuyTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      price: 0,
      show: true,
      redirect: false,
      resstatus: "",
      loader: true,
      qty: 0,
      price: ""
    };
  }

  handlePlus = () => {
    this.setState({
      price: this.props.price * (this.state.qty + 1),
      qty: this.state.qty + 1
    });
  };

  handleMinus = () => {
    if (this.state.qty > 0) {
      this.setState({
        price: this.state.price - this.props.price,
        qty: this.state.qty - 1
      });
    }
  };

  // componentDidMount() {
  //   console.log(this.props.price);
  // }

  handleClose = e => {
    this.setState({ show: false });
  };

  handleSaveOrder = e => {
    if (this.state.qty > 0) {
      let data = {
        ticket: this.props.id,
        qty: this.state.qty,
        attachment: ""
      };
      this.props.createOrder1(data).then(res => {
        console.log(res);
        this.setState({
          redirect: true
        });
      });
    } else {
      alert("fill qry");
    }
  };

  render() {
    let nameTrain, startStation, destination, price, tipeTrain;
    if (this.props.dataFromLanding.data) {
      nameTrain = this.props.dataFromLanding.data.name_train;
      startStation = this.props.dataFromLanding.data.start_station;
      destination = this.props.dataFromLanding.data.destination_station;

      tipeTrain = this.props.dataFromLanding.data.train.type_train;
      // nameTrain = this.props.dataFromLanding.data.name_train;
    }

    // console.log(this.props.dataFromLanding.data.name_train);

    return (
      <>
        {this.state.redirect ? (
          <Redirect
            to={{ pathname: "/payment", state: { id: this.props.id } }}
          />
        ) : (
          " "
        )}
        <Modal
          size="lg"
          show={this.props.showModalBuy}
          onHide={this.props.handleModalBuyTicket}
        >
          <Container fluid>
            <div className="box-logo-invoice bg-primary-90 logopay">
              <img
                alt="logo"
                className="front-logo logo-invoice"
                src="http://localhost:3000/assets/images/logo.png"
              />
            </div>
            <Row className="justify-content-md-center ">
              <Col md="12" className="head-modal">
                <h1 className="color-pink">Beli Tiket</h1>
              </Col>
            </Row>
          </Container>

          <div className="container box-pay box-shadow-2">
            <Container fluid>
              <Row className="justify-content-md-center  payment ">
                <Col
                  md="12"
                  className="head-modal head-invoice text-right pay-title body-buy-tiket"
                >
                  <h1 className="invoice drop-shadow-2">Kereta Api</h1>
                  <p className="color-black-7 drop-shadow-2">
                    <span className="bold-7">{getDaye(this.props.date)}</span>,
                    {this.props.date}
                  </p>
                </Col>
              </Row>
            </Container>

            <Container className="fill-detail-pay ">
              <div className="pr-3 pl-3 ">
                <div className="row ">
                  {/* ============= */}
                  <div className="col-md-4 ">
                    <span className="kreta mt-2 color-black-7">
                      {nameTrain}
                    </span>
                    <p>{tipeTrain}</p>
                  </div>

                  <div className="col-md-4">
                    <span className="kreta mt-2 color-black-7">
                      {this.props.start}
                    </span>
                    <p>{this.props.date}</p>

                    <div>
                      <span className="kreta mt-2 color-black-7">
                        {this.props.end}
                      </span>
                      <p>{this.props.date}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <span className="kreta mt-2 color-black-7">
                      {startStation}
                    </span>
                    <p>St. {startStation}</p>
                    <div>
                      <span className="kreta mt-2 color-black-7">
                        {destination}
                      </span>
                      <p>St. {destination}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* detail invoice   */}
              <div>
                <div className="row">
                  <div className="col-md-10 detail-invoice-adm foot-pay container">
                    <div className="pr-3 pl-3  justify-content-right box-counter">
                      <div className="counter">
                        <FontAwesomeIcon
                          icon={faPlusSquare}
                          onClick={this.handlePlus}
                        />
                        <span>{this.state.qty}</span>
                        <FontAwesomeIcon
                          icon={faMinusSquare}
                          onClick={this.handleMinus}
                        />
                      </div>
                      {this.state.price ? (
                        <p className="text-right">
                          Price:{" "}
                          <span className="bold-8 drop-shadow-2">
                            {this.state.price}
                          </span>
                        </p>
                      ) : (
                        <p className="text-right ">
                          Price:{" "}
                          <span className="bold-8 drop-shadow-2">
                            {this.props.price}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-2 click-pay mb-4">
                    {/* <Link to="/payment" className="click-pay-btn"> */}
                    <Button
                      onClick={this.handleSaveOrder}
                      className=" btn-log color-bg btn-modal-tiket"
                      style={{ fontWeight: "1000" }}
                    >
                      Beli
                    </Button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    create: state.addOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder1: create => dispatch(createOrder(create))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBuyTicket);
