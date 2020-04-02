import React, { Component } from "react";
import Landing from "./component/Landing";

import "./App.css";
import "./mobile.css";
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
//
// action user
// admin
import DashboardA from "./component/page/private/DashboardAdm";

//public
import UserDashboard from "./component/page/public/UserDashboard";
import UserMyTiket from "./component/page/public/UserMyTiket";
import UserPayment from "./component/page/public/UserPayment";

//dashboar

import AdminAddTicket from "./component/page/private/AdminAddTicket";
import { connect } from "react-redux";
import { getUser } from "./_actions/userA";
// import { authenticatedPage } from "./config/authenticatedPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          {/* {token ? <Redirect to="/mydashboard" /> : <Redirect to="/" />} */}

          <Switch>
            <Route exact path="/" component={Landing} />
            {/* admin */}
            <Route path="/mydashboard" component={DashboardA} />
            <Route path="/addticket" component={AdminAddTicket} />
            {/* public */}
            <Route path="/dashboard" component={UserDashboard} />
            <Route path="/mytiket" component={UserMyTiket} />
            <Route path="/payment" component={UserPayment} />
            {/* authpage  */}
            {/* <Route exact path="/home" component={authenticatedPage(Index)} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    userR: state.userR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
