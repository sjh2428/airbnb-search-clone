import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREASE':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Card = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 Counter의 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>-1</button>
    </div>
  );
};

export default Card;
