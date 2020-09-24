import React, { Component } from 'react';
import './pageCard.css';

class Card extends Component {
    render() {
        var data = this.props.data;

        return (
            <div className="Card">
                <div>
                    <img src={data.img}></img>
                    <div class='best'>{data.button}</div>
                    <div >{data.detail}</div>
                    <div >{data.prices}</div>
                </div>
            </div>
        );
    }
}

export default Card;
