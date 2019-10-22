import React from 'react';
import variables from '../guest-variables';

const { ACTION_INCREMENT, ACTION_DECREMENT } = variables;

const GuestCounter = props => {
  const { type, cnt, who, handler } = props;

  return (
    <div>
      {type}
      <button onClick={() => handler({ type: ACTION_DECREMENT, who })}>-</button>
      {cnt}
      <button onClick={() => handler({ type: ACTION_INCREMENT, who })}>+</button>
    </div>
  );
};

export default GuestCounter;
