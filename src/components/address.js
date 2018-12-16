import React, { Component } from 'react';

import AddressForm from './address-form';

export default class Address extends Component {
    componentDidMount() {
        this.props.getStates();
    }
    render() {
        let { states } = this.props;

        return <AddressForm 
            states={states}
            />;
    }
}