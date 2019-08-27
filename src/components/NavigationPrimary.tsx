import React, { Component, Fragment } from "react";
import { getNavigationPrimary } from "../api/Services";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";

type Items = {
  url: string;
  title: string;
  child_items?: any;
};

type NavigationPrimaryState = {
  data: Items[];
};

export default class NavigationPrimary extends Component<
  {},
  NavigationPrimaryState
> {
  async componentDidMount() {
    let data = await getNavigationPrimary();
    console.log(data);
    this.setState({
      data: data
    });
  }

  render() {
    let ret =
      this.state && this.state.data !== null ? (
        <nav>
          <ul className="">
            {this.state.data.map(item => (
              <li>
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <Loader />
      );

    return ret;
  }
}
