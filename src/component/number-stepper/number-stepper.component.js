import React, { useReducer } from 'react';
import { numberReducer } from './number-stepper.reducer'

const initialState = 3;

const NumberStepper = ({}) => {
  const whatEverIWant = 2222;
  const [numberValue, dispatchNumberValue] = useReducer(numberReducer, initialState);
  return (
    <div>
      <button onClick={() => dispatchNumberValue({type: 'SUBSTRACT'})}>-</button>
      <button onClick={() => dispatchNumberValue({
        type: 'SET_THE_CURRENT_ONE_TO_WHATEVER_I_WANT', 
        payload: whatEverIWant
      })}>Custom</button>
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