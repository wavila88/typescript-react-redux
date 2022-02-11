import { useReducer } from "react";

type CounterState = {
  count: number
}

type UpdateAction = {
  type: 'increment'| 'decrement'
  payload: number
}

type ResetAction = {
  type: 'reset'
}
//Can be both types
type CounterAction = UpdateAction | ResetAction

const initialState = {count: 0}

function reducer(state: CounterState, action: CounterAction) {

  switch(action.type){
    case 'increment':
      return { count: state.count + action.payload};
    case 'decrement':
      return { count: state.count - action?.payload};
    case 'reset':
      return  initialState;
    default:
      return state;
  }
}


export const ReducerCounterComponent = () => {
  const [state, dispatch] = useReducer(reducer,initialState);
  return(
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment', payload: 10})}>
        Increment 10
      </button>
      <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
        Increment 10
      </button>
      <button onClick={() => dispatch({type: 'reset'})}>
       Reset
      </button>
    </>
  )
};