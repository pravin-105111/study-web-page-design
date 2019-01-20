import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import AddressFormContainer from '../redux/container/address-form-container';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisibility: false
        }
    }
    showEmployeeForm = () => {
        this.state.showVisibility ? this.setState({showVisibility: false}) :this.setState({showVisibility: true});
    }

    routeToSingnUp = () => {
        this.props.history.push('/signup');
    }
    render() {
        return ( 
       <div>
           <input type="submit" value="Add Employee Details" onClick={this.showEmployeeForm} />
           {this.state.showVisibility ? <AddressFormContainer /> : null}
           <button onClick={this.routeToSingnUp}>SingnUp</button>
       </div>
        );
    }
}
export default withRouter(Info);