import React, { Component } from 'react';
import './pageCard.css';

class Card extends Component {
    render() {
        var data = this.props.data;

        return (
            <div className="Card">
                <div>
                    
                    <img src={data.img}></img><br></br>
                    <br></br>
                    <div >{data.detail}</div><br></br>
                    <div >{data.prices}</div>
                </div>
            </div>
        );
    }
}

export default Card;
