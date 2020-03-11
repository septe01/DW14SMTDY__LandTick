import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class ModalPaymentBtn extends Component {
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
    console.log(this.props.data);
    return (
      <div>
        <Button
          className=" btn-log color-bg btn-pay-now-mdl mt-3"
          onClick={this.handleShow}
          style={{ fontWeight: "900" }}
        >
          Bayar Sekarang
        </Button>

        <Modal
          size="lg"
          show={this.state.showAdd}
          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Body>
            Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat
            pesanan <spam class="click-disini">Klik Disini</spam> Terimakasih
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ModalPaymentBtn;
