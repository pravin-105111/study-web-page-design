import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import AddressFormReducer from './address-form-reducer'

const rootReducer = combineReducers({
  form: formReducer,
  adress: AddressFormReducer
});

export default rootReducer;
