import React, { Component } from 'react';



class ProductionsCard extends Component {
    render() {
        return (
            <>
                <div className="productions-card">
                    <h1 className="card_title">{this.props.title}</h1>
                    <img src={this.props.img} alt="productions-graphic" className="card_img" />
                </div>
            </>
        );
    }
}

export default ProductionsCard;