import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginInfo extends Component {

    render() {
        return (
            <form>
                <div className="tab-left">
                    <label>User Name</label>
                    <div>
                        <Field
                            name="userName"
                            component="input"
                            type="text"
                            placeholder="username"
                        />
                    </div>
                </div>
                <div className="tab-right">
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                        />
                    </div>
                </div>
            </form>
        )
    }
}
export default reduxForm({
    form: 'login'
})(LoginInfo);