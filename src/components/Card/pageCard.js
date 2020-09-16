import React, { Component } from 'react';
import './pageCard.css';

class Card extends Component {
    render() {
        var data = this.props.data;

        return (
            <div className="Card">
                <div>
                <img src={data[0].img}></img>
                <div>sdfsdfsdfdsf</div>
                </div>
                
            </div>
        );
    }
}

export default Card;
