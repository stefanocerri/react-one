import React, { Component } from "react";
import logo from "../logo.svg";
import "../scss/header.scss";
import "../scss/logo.scss";

import NavigationPrimary from "../components/NavigationPrimary";

export default class Header extends Component<{}> {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <NavigationPrimary />
      </div>
    );
  }
}
