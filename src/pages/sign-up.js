import React, { Component } from 'react';
import AddressContainer from '../redux/container/address-form-container';
import LoginInfo from '../pages/login-info';

class SignUp extends Component {

    render() {
        return (
            <div>
                <AddressContainer />
                <LoginInfo />
                <div className="div-pad-top">
                    <button type="submit">SingnUp</button>
                </div>
            </div>
        );
    }
}
export default SignUp;