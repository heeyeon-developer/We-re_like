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
                <div id='left'>
                    <div style={{float: 'right',display: 'block', width: '15vw', borderColor: '1px solid purple'}}>
                        <a href="#Login" ><p style={{marginTop:'0.3rem'}}>Login</p></a>
                        <a href="#Select" style={{ marginTop: '0' }}><img src='https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/take_it.png'></img></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
