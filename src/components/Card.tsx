import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
//import "./card.scss";

type Title = {
  rendered: string;
};

type Post = {
  id: number;
  title: { [key: string]: Title };
};

type CardProps = {
  key?: number;
  data: Post;
};

class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card">
        <h2 className="card__title">{this.props.data.title.rendered} </h2>
        <ul className="card__list">
          <li className="card__item"> </li>
        </ul>
      </div>
    );
  }
}

export default Card;
