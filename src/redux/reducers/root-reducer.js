import { combineReducers } from 'redux';
import AddressFormReducer from './address-form-reducer'

const rootReducer = combineReducers({
  adress: AddressFormReducer
});

export default rootReducer;
