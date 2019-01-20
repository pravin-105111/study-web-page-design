import React, { Component } from 'react';

import AddressForm from './address-form';

export default class Address extends Component {
    componentDidMount() {
        this.props.getStates();
    }
    render() {
        let { states,initialValues } = this.props;

        return <AddressForm 
            states={states}
            initialValues={initialValues}
            />;
    }
}