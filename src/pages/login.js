import React, { Component } from 'react';
import LoginInfo from './login-info';

class Login extends Component {

    render() {
        return (
            <div>
                <LoginInfo />
                <div className="div-pad-top">
                    <button type="submit">Sign In</button>
                </div>
            </div>
        )
    }
}

export default Login;