import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";

import { getZoneInfo } from "./redux/actions/zoneInfoActon";
import "./assests/stylesheets/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatch(getZoneInfo());
  }
  render() {
    return (
      <>
        <Switch>
          <Route exact to="/" component={Home} />
        </Switch>
      </>
    );
  }
}

export default connect()(App);
