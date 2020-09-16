import React, { Component } from 'react';
import './pageNav.css';

class Nav extends Component {
    render() {

        var list = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            list.push(<a key={data[i].id} href={"#"+data[i].title}>{data[i].title} </a>)
            i++;
        }

        return (
            <div className='Nav'>
                <div>
                    {list}
                </div>
            </div>
        );
    }
}

export default Nav;
