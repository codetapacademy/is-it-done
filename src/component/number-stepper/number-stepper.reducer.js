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

export {
  numberReducer
}