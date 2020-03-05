import React, { Component } from "react";
import Landing from "./component/Landing";

// admin
import DashboardA from "./component/page/private/Dashboard";

//public

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

            {/* <Route exact path="/home" component={authenticatedPage(Index)} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
