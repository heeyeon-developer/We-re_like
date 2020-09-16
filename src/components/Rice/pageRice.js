import React, { Component } from 'react';
import Card from '../Card/pageCard';
import './pageRice.css';

class Rice extends Component {
    render() {
        // return (
        //     <div className="Rice">
        //         <div id={this.props.id}>
        //             {this.props.id}
        //         </div>
        //     </div>
        // );

        var data = this.props.data;


        return (
            <div className="Rice">
                <div id={this.props.id}>
                    <div style={{ width: '100vw' }}>
                        <img style={{ width: '270px', margin: '0 auto', display: 'block' }} src='/uploads/logo_bread.png'></img>
                    </div>
                    <Card data={data}></Card>
                    <Card data={data}></Card>
                </div>
            </div>
        );
    }
}

export default Rice;
