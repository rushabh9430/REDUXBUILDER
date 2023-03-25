const initialState = {
    state1 : 10
};
const CounterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {

    return{...state ,  state1 : state.state1 + 1};
  }
  if (action.type === "DECREMENT") {
    return{...state , state1 : state.state1-1};

  }
  return state;
};
export default CounterReducer;
