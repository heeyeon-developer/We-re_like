import React, { Component } from 'react';
import './pageBox.css';

class Box extends Component {
    render() {
        // var data = this.props.data;

        return (
            <div className="Box">
                <select name="select">
                    <option value="가격">가격순</option>
                    <option value="인기">인기순</option>
                    <option value="날짜">등록순</option>
                    <option value="별점">별점순</option>
                </select>

            </div>
        );
    }
}

export default Box;
