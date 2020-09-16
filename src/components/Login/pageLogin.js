import React, { Component } from 'react';
import './pageLogin.css';
//리액트는 이미지를 올릴때 public에 올려야 불러올 수 있음
class Login extends Component {
    render() {

        var data = this.props.data;

        return (
            <div className="Login" id={this.props.id}>
                <div class="logincenter">
                    <img src="https://raw.githubusercontent.com/heeyeon-developer/We-re_like/master/public/logo.png"></img>
                    <form method="post" id="authForm" >
                        <div>
                            <h2>Login</h2>
                            <label for="loginId">ID</label>
                            <input type="email" id="loginId" name="loginId" placeholder="ID" ></input><br></br>
                            <label for="loginPw">Password</label>
                            <input type="password" id="loginPw" name="password" placeholder="Password" ></input>
                            <button type="submit" disabled="disabled">Login</button>
                            <button type="submit" disabled="disabled">Register</button>
                        </div>
                    </form>
                </div>
                
            </div>
            
        );
    }
}

export default Login;
