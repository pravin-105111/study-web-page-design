import React from 'react';
import {connect} from 'react-redux';
import AddressForm from '../../components/address-form';
import {getValue} from '../reducers/address-form-reducer';

const mapStateToProps = state => {
    return {
        value: state.adress.value
    }
}

const mapDispatchToProps = dispatch => ({
     getValue: value => dispatch(getValue(value))
   
})

const addressForm = connect(mapStateToProps, mapDispatchToProps)(AddressForm);
export default addressForm;