import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddressForm extends Component {

    render() {
        let { handleSubmit } = this.props;
        let initial = this.props.initialValues;
        console.log('====city====', this.props.initialValues.city);
        console.log('====initial====', this.props.initialValues);
         
           //let {firstName,email} = this.props;
        
        const renderField = () => {
            return (<select>
                {/* <option value="select">-select-</option> */}
                return {initial && initial.state &&
                     <option value={initial.state}>{initial.state}</option>
                }
            </select>)
        }

        return (
            <form onSubmit={handleSubmit}>
            <div className="header">Employement Information:</div>
                <div className="tab-left">
                    <label>First Name:</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div className="tab-right">
                    <label>Last Name:</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="tab-left">
                    <label>Address Line1:</label>
                    <div>
                        <Field
                            name="addressLne1"
                            component="input"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="tab-right">
                    <label>Address Line2:</label>
                    <div>
                        <Field
                            name="addressLne2"
                            component="input"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="tab-left">
                    <label>Gender:</label>
                    <div>
                        <Field
                            name="gender"
                            component="input"
                            type="radio"
                            value="male"
                        /> Male
                        <Field
                            name="gender"
                            component="input"
                            type="radio"
                            value="female"
                        />  Female
                    </div>
                </div>
                <div className="tab-right">
                    <label>Email:</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="example@email.com"
                        />
                    </div>
                </div>
                <div className="tab-left">
                    <label>Zip Code:</label>
                    <div>
                        <Field
                            name="zipCode"
                            component="input"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="tab-right">
                    <label>City:</label>
                    <div>
                        <Field
                            name="city"
                            component="input"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div>
                    <label>State:</label>
                    <div>
                        <Field
                            name="state"
                            component={renderField} />
                    </div>
                </div>
                <div className="tab-right div-pad-top">
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
AddressForm.defaultProps = {
    initialValues:{city: 'Patna'}
};

export default reduxForm({
     form: 'simple',
 })(AddressForm);