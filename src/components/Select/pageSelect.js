import React, { Component } from 'react';
import './pageSelect.css';
//리액트는 이미지를 올릴때 public에 올려야 불러올 수 있음
class Select extends Component {
    render() {

        var data = this.props.data;

        return (
            <div className="Select" id={this.props.id}>
                <img src="https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/logo.png"></img>
                <div class="selectcenter">
                    <form method="post" id="authForm">
                        <div class="wraplist">
                            <h1 style={{fontSize: '2vh',textAlign:'center',width: '30vw'}}>Purchase List</h1>
                            <div>list1</div>
                            <div>list2</div>
                            <div>list3</div>
                            <div>list4</div>
                            <div>list5</div>
                            <br></br>
                            <div>total</div>
                        </div>
                        <div>
                        <div style={{border: 'none'}} class='wrapbutton'>
                            <button type="submit" disabled="disabled">Delete</button>
                            <button type="submit" disabled="disabled">Order</button>
                        </div>
                        </div>
                        
                        
                    </form>
                </div>              
            </div>

        );
    }
}

export default Select;
