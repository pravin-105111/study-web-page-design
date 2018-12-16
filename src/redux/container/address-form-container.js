import React from 'react';
import {connect} from 'react-redux';
import Address from '../../components/address';
import {getStates} from '../reducers/address-form-reducer';

const mapStateToProps = state => {
    return {
        states: state.adress.states,
        form: state.form
    }
}

const mapDispatchToProps = dispatch => ({
    getStates: () => dispatch(getStates())
   
})

const addressForm = connect(mapStateToProps, mapDispatchToProps)(Address);
export default addressForm;