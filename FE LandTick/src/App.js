import React, { Component } from "react";
import Landing from "./component/Landing";

// admin
import DashboardA from "./component/page/private/DashboardAdm";

//public
import UserDashboard from "./component/page/public/UserDashboard";
import UserMyTiket from "./component/page/public/UserMyTiket";
import UserPayment from "./component/page/public/UserPayment";

//dashboar

import "./App.css";
import "./mobile.css";
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AdminAddTicket from "./component/page/private/AdminAddTicket";
// import { authenticatedPage } from "./config/authenticatedPage";

class App extends Component {
  render() {
    const token = localStorage.getItem("token");
    return (
      <Router>
        <div className="">
          {/* {token ? <Redirect to="/home" /> : <Redirect to="/" />} */}
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* admin */}
            <Route path="/mydashboard" component={DashboardA} />
            <Route path="/addticket" component={AdminAddTicket} />
            //public
            <Route path="/dashboard" component={UserDashboard} />
            <Route path="/mytiket" component={UserMyTiket} />
            <Route path="/payment" component={UserPayment} />
            {/* <Route exact path="/home" component={authenticatedPage(Index)} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
