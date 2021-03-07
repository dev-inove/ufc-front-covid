import React, { Component } from "react";
import "./styles/box.scss";

class Box extends Component {
  render() {
    return (
      <div className="box">
        <h2 className="box__title">{this.props.title}</h2>

        <h2 className="box__num">{this.props.num}</h2>
      </div>
    );
  }
}

export default Box;
