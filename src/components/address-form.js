import React, { Component } from 'react';

export default class AddressForm extends Component {
    componentDidMount() {
        this.props.getValue('Hello Web Page');
    }
    render() {
        let {value} = this.props;
        return(
            <div>{value}</div>
        );
    }
}