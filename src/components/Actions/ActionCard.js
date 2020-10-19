import React, { Component } from "react";
import "./style.scss";
class ActionCard extends Component {
  render() {
    return (
      <>
        <div className="action-card">
          <div className="action-card__text">
            <img
              alt="card"
              src={this.props.image}
              className="action-card__image"
            />
            <h1 className="action-card__text--title"> {this.props.title}</h1>
            <h2 className="action-card__text--sub"> {this.props.sub}</h2>
            <a className="action-card__text--link" href="/action">
              Saiba mais →{" "}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ActionCard;
