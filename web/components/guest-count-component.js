import React from 'react';

const GuestCounter = props => {
  const { type, cnt, who, handler } = props;

  return (
    <div>
      {type}
      <button onClick={() => handler({ type: 'decrement', who })}>-</button>
      {cnt}
      <button onClick={() => handler({ type: 'increment', who })}>+</button>
    </div>
  );
};

export default GuestCounter;
