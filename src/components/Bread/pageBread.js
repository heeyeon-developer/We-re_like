import React, { Component } from 'react';
import Card from '../Card/pageCard';
import Box from '../Box/pageBox';
import './pageBread.css';
//리액트는 이미지를 올릴때 public에 올려야 불러올 수 있음
class Bread extends Component {
    render() {

        var list = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            list.push(<Card key={data[i].id} data={data[i]}></Card>)
            i++;
        }

        return (
            <div className="Bread">
                <div style={{ paddingTop: '8vh' }} id={this.props.id}>
                    <div style={{ width: '100vw'}}>
                        <img style={{ width: '25vh', margin: '0 auto', display: 'block' }} src='https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/uploads/logo_bread.png'></img>
                    </div>
                        <Box></Box>
                    <div style={{ width: '90vw', verticalAlign: 'bottom',margin: '0 auto', display: 'block' }}>
                        {list}
                    </div>
                </div>
            </div>
        );
    }
}

export default Bread;
