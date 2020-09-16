import React, { Component } from 'react';
import Card from '../Card/pageCard'
import './pageBread.css';
//리액트는 이미지를 올릴때 public에 올려야 불러올 수 있음
class Bread extends Component {
    render() {

        var data = this.props.data;

        return (
            <div className="Bread">
                <div id={this.props.id}>
                    <div style={{ width: '100vw'}}>
                        <img style={{ width: '270px', margin: '0 auto',display: 'block' }} src='/uploads/logo_bread.png'></img>
                    </div>
                    <div style={{ width: '90vw', margin: '0 auto', display: 'block', border:'1px solid pink' }}>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                        <Card data={data}></Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bread;
