import React, { Component } from 'react';
import './pageCard.css';

class Card extends Component {
    render() {
        var data = this.props.data;

        return (
            <div className="Card">
                <div>
                <img src={data.img}></img>
                <div>{data.detail}</div>
                </div>
            </div>
        );
    }
}

export default Card;
