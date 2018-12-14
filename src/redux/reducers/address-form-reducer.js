export const ADDRESS_FORM = 'ADDRESS_FORM';
export const getValue = value => {
    console.log('===action==');
    return {
        type: ADDRESS_FORM,
        value
    }
}
const initialState = {
    value: ''
}
export default function reducer(state=initialState, action='') {
    console.log('===type==', action.type);
  switch (action.type) {
      
      case ADDRESS_FORM:
      return {...state, value:action.value}
      default:
      return state;
  }
}