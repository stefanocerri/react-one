import React, { Component, Fragment } from "react";
import { getNavigationPrimary } from "../api/Services";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import { getSlug } from "../utility/GetSlug";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "../Page";

interface Items {
  url: string;
  title: string;
  child_items?: Items[];
}

interface NavigationPrimaryState {
  data: Items[];
}

export default class NavigationPrimary extends Component<
  {},
  NavigationPrimaryState
> {
  async componentDidMount() {
    let data = await getNavigationPrimary();

    this.setState({
      data: data
    });
  }

  render() {
    let ret =
      this.state && this.state.data !== null ? (
        <Router>
          <nav>
            <ul className="">
              {this.state.data.map(item => (
                <li>
                  <NavLink to={getSlug(item.url)}>{item.title}</NavLink>
                  {item.child_items ? (
                    <ul className="">
                      <li>
                        {
                          //item.child_items
                        }
                      </li>
                    </ul>
                  ) : null}
                  <Route path={getSlug(item.url)} component={Page} />
                </li>
              ))}
            </ul>
          </nav>
        </Router>
      ) : (
        <Loader />
      );

    return ret;
  }
}
