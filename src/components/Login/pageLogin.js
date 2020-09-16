import React, { Component } from 'react';
import './pageLogin.css';
//리액트는 이미지를 올릴때 public에 올려야 불러올 수 있음
class Login extends Component {
    render() {

        var data = this.props.data;

        return (
            <div className="Login" id={this.props.id}>
                로그인 하는 페이지 입니다.
            </div>
            
        );
    }
}

export default Login;
