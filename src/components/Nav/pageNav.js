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
                    {list}
                <div class='left'>
                    <a href="#Select" style={{ marginTop: '0'}}><img style={{width: '50px'}} src='/uploads/take_it.png'></img></a>
                    <a href="#Login" ><p style={{marginTop:'0.3rem'}}>Login</p></a>
                </div>
            </div>
        );
    }
}

export default Nav;
