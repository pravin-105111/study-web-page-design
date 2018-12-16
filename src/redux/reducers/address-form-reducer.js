export const ADDRESS_FORM = 'ADDRESS_FORM';
export const getStates = () => {

    return {
        type: ADDRESS_FORM,
        states: [
                'Bihar',
                'West Bengal',
                'Uttar Pradesh',
                'Delhi',
                'Hariyana'
        ]
    }
}
const initialState = {
    states: ''
}
export default function reducer(state=initialState, action='') {
  switch (action.type) {
      
      case ADDRESS_FORM:
      return {...state, states: action.states}
      default:
      return state;
  }
}