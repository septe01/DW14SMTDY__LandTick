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
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getOreder();
  }
  render() {
    const order = this.props.order.getOrder.data;
    // console.log(order);
    const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/" />;
    }
    let no = 1;
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
            {order
              ? order.map((val, key) => (
                  <div
                    className="row justify-content-center  field-list field-tr-list"
                    key={key}
                  >
                    <div className="col-md-1 text-center">
                      <h6 className="bold-8">{no++}</h6>
                    </div>
                    <div className="col-md-2 text-center">
                      <h6 className="bold-8">{val.user.name}</h6>
                    </div>
                    <div className="col-md-2 text-center">
                      <h6 className="bold-8">{`${val.ticket.start_station} - ${val.ticket.destination_station}`}</h6>
                    </div>
                    <div
                      className="col-md-2 text-center"
                      style={{ overflow: "hidden" }}
                    >
                      {val.attachment ? (
                        <h6 className="bold-8">{val.attachment}</h6>
                      ) : (
                        "-"
                      )}
                    </div>
                    <div className="col-md-2 text-center">
                      {val.status === "a" ? (
                        <h6 className="bold-8 clr-green">Approved</h6>
                      ) : (
                        ""
                      )}
                      {val.status === "c" ? (
                        <h6 className="bold-8 clr-red">Cancle</h6>
                      ) : (
                        ""
                      )}
                      {val.status === "p" ? (
                        <h6 className="bold-8 clr-orange">Pending</h6>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-md-3 text-center">
                      <div className="row justify-content-center">
                        {/* data={} */}
                        <ModalInvoice id={val.id} />
                        <ModalEditInvoice id={val.id} />
                        {/* <FontAwesomeIcon
                          icon={faTrash}
                          className="opsi-admin-list"
                        /> */}
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.Order,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOreder: () => dispatch(getOreder()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdm);
