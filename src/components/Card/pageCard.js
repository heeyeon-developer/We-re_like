import React, { Component } from 'react';
import './pageCard.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this); // bind 해줘야 this 활용가능
    }
    handleClick = (data) => {
        alert(data)
    }
    
    render() {
        var data = this.props.data;

        return (
            <div className="Card">
                <div>
                    <div onClick={()=>this.handleClick(data)}>
                    <img src={data.img} />
                    </div>
                    <div class='best'>{data.button}</div>
                    <div >{data.detail}</div>
                    <div >{data.prices}</div>
                </div>
            </div>
        );
    }
}

export default Card;
