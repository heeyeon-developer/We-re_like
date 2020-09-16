import React, { Component } from 'react';
import './pageBox.css';

class Box extends Component {
    render() {
        // var data = this.props.data;

        return (
            <div className="Box">
                <select name="select">
                    <option value="독서">가격순</option>
                        <option value="야구">인기순</option>
                        <option value="축구">등록순</option>
                         <option value="음악감상">별점순</option>
                </select>

            </div>
        );
    }
}

export default Box;
