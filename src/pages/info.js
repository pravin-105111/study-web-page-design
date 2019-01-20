import React, { Component } from 'react';

import AddressFormContainer from '../redux/container/address-form-container';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisibility: false
        }
    }
    showEmployeeForm = () => {
        this.state.showVisibility ? this.setState({ showVisibility: false }) : this.setState({ showVisibility: true });
    }
    render() {
        return (
            <div>
                <input type="submit" value="Add Employee Details" onClick={this.showEmployeeForm} />
                {this.state.showVisibility ? <AddressFormContainer /> : null}
                <div className="tab-right div-pad-top">
                    {this.state.showVisibility ? <button type="submit">Submit</button> : ''}
                </div>
            </div>
        );
    }
}
export default Info;