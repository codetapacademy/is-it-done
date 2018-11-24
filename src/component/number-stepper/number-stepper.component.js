import React, { useReducer } from 'react';

const initialState = 3;
const numberReducer = (state, action) => {
  // this is the reducer ::)
  switch(action.type) {
    case 'ADD':
      return state + 1;
    case 'SET_THE_CURRENT_ONE_TO_WHATEVER_I_WANT':
      state = action.payload;
      return state;
    case 'SUBSTRACT':
      return state - 1;
    default:
      return state;
  }
}

const NumberStepper = ({}) => {
  const payload = 2222;
  const [numberValue, dispatchNumberValue] = useReducer(numberReducer, initialState);
  return (
    <div>
      <button onClick={() => dispatchNumberValue({type: 'SUBSTRACT'})}>-</button>
      <button onClick={() => dispatchNumberValue({type: 'SET_THE_CURRENT_ONE_TO_WHATEVER_I_WANT', payload})}>Custom</button>
      <span>{numberValue}</span>
      <button onClick={() => dispatchNumberValue({type: 'ADD'})}>+</button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   something: state.something
// })

// const matchDispatchToProps = dispatch => ({
//   something: dispatch(getMeAnAction('value'))
// })

export default NumberStepper;
// export default connect(mapStateToProps, matchDispatchToProps)(NumberStepper);