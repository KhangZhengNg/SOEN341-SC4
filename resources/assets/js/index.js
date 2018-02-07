import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./src/app";
import { Login, Register,ResetLink } from "./src/auth";
import "../sass/app.scss";
import "antd/dist/antd.css";

require("./bootstrap");

class SOEN341 extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          
          
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<SOEN341 />, document.getElementById("root"));
