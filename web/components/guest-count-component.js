import React from 'react';

const GuestCounter = props => {
  const { type, cnt, incHandler, decHandler } = props;

  return (
    <div>
      {type}
      <button onClick={() => incHandler({ type: 'decrement', who: type })}>-</button>
      {cnt}
      <button onClick={() => decHandler({ type: 'increment', who: type })}>+</button>
    </div>
  );
};

export default GuestCounter;
