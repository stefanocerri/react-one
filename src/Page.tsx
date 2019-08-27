import React, { Component } from "react";
import { getPosts } from "./api/Services";

import Card from "./components/Card";
import Loader from "./components/Loader";

type Title = {
  rendered: string;
};

type Post = {
  id: number;
  title: { [key: string]: Title };
};

type PostsState = {
  data: Post[];
};

export default class Posts extends Component<{}, PostsState> {
  async componentDidMount() {
    let data = await getPosts();
    this.setState({
      data: data
    });
  }

  render() {
    let ret =
      this.state && this.state.data !== null ? (
        <div className="page">
          {this.state.data.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <Loader />
      );

    return ret;
  }
}
