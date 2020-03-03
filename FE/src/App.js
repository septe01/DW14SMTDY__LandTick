import React, { Component } from "react";
import Landing from "./component/Landing";

//dashboar

import "./App.css";
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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
            {/* <Route exact path="/home" component={authenticatedPage(Index)} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
