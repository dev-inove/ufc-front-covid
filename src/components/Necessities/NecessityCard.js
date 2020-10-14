import React, { Component } from 'react';
import "./style.scss";

class NecessityCard extends Component {

    render() {
        return (

            <>

                <div className="necessity-card" >
                    <div className="necessity-card__up">
                        <img
                            className="necessity-card__up--img"
                            src={this.props.img}
                            alt="necessity-img"
                        />
                    </div>
                    <div className="necessity-card__bottom">
                        <h3 className="necessity-card__title">{this.props.title}</h3>
                        <div className="necessity-card__btn">
                            <button className="necessity-card__btn--find">Achar Produto</button>
                            <button className="necessity-card__btn--contribute">Quero Contribuir</button>
                        </div>
                    </div>
                </div>


            </>
        );
    }

}

export default NecessityCard;

