import React, { Component } from "react";
import HeaderPrimary from "../../template/HeaderPrimary";
import Footer from "../../template/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ModalInvoice from "../../modal/ModalInvoice";
import ModalEditInvoice from "../../modal/ModalEditInvoice";
import { Link, Redirect } from "react-router-dom";

//get order
import { getOreder } from "../../../_actions/orderA";
import { connect } from "react-redux";

class DashboardAdm extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {};
  // }

  componentDidMount() {
    this.props.getOreder();
  }
  render() {
    console.log(this.props.orderR);
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="dashAdmin">
        <HeaderPrimary />

        <div className="container box-heigth-tr mt-5">
          <div>
            <h2 className="title-list-transaksi">List Transaksi</h2>
          </div>
          <div className="box-list-tr mb-4">
            <div className="row justify-content-center mt-4 list-tr">
              <div className="col-md-1 tr text-center">No</div>
              <div className="col-md-2 tr text-center">Users</div>
              <div className="col-md-2 tr text-center">Tiket</div>
              <div className="col-md-2 tr text-center">Bukti Transfer</div>
              <div className="col-md-2 tr text-center">Status Payment</div>
              <div className="col-md-3 text-center">Action</div>
            </div>

            {/* ============== */}
            <div className="row justify-content-center  field-list field-tr-list">
              <div className="col-md-1 text-center">
                <h6 className="bold-8">1</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8">Anto</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8">Surabaya - Jakarta</h6>
              </div>

              <div className="col-md-2 text-center">
                <h6 className="bold-8">BCA.png</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8 clr-orange">Pending</h6>
              </div>
              <div className="col-md-3 text-center">
                <div className="row justify-content-center">
                  <ModalInvoice />
                  <ModalEditInvoice />
                  <FontAwesomeIcon icon={faTrash} className="opsi-admin-list" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center  field-list field-tr-list">
              <div className="col-md-1 text-center">
                <h6 className="bold-8">1</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8">Anto</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8">Surabaya - Jakarta</h6>
              </div>

              <div className="col-md-2 text-center">
                <h6 className="bold-8">BCA.png</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8 clr-red">Cancel</h6>
              </div>
              <div className="col-md-3 text-center">
                <div className="row justify-content-center">
                  <ModalInvoice />
                  <FontAwesomeIcon icon={faEdit} className="opsi-admin-list" />
                  <FontAwesomeIcon icon={faTrash} className="opsi-admin-list" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center  field-list field-tr-list">
              <div className="col-md-1 text-center">
                <h6 className="bold-8">1</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8">Anto</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8">Surabaya - Jakarta</h6>
              </div>

              <div className="col-md-2 text-center">
                <h6 className="bold-8">BCA.png</h6>
              </div>
              <div className="col-md-2 text-center">
                <h6 className="bold-8 clr-green">Approved</h6>
              </div>
              <div className="col-md-3 text-center">
                <div className="row justify-content-center">
                  <ModalInvoice />
                  <FontAwesomeIcon icon={faEdit} className="opsi-admin-list" />
                  <FontAwesomeIcon icon={faTrash} className="opsi-admin-list" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderR: state.orderR
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOreder: () => dispatch(getOreder())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdm);
