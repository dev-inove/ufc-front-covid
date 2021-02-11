import React, { Component } from "react";

import "./style.scss";

class SectionTitle extends Component {
  render() {
    return (
      <>
        <div className="section-title">
          <h1 className="section-title__main">{this.props.title}</h1>
          <h2 className="section-title__sub">
            {this.props.sub}
            <slot></slot>
          </h2>
          <hr className="section-title__underline" />
        </div>
      </>
    );
  }
}

export default SectionTitle;
