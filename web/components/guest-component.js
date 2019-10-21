import React, { useReducer } from 'react';
import GuestCounter from './guest-count-component';
import setGuestsReducer from './reducers/guest-reducer';
import guestCounters from './datas/guest-counter';

const SetPeople = () => {
  const initState = {
    totalGuests: 0,
    adultGuests: 0,
    childGuests: 0,
    infantGuests: 0,
  };

  const [state, dispatch] = useReducer(setGuestsReducer, initState);

  return (
    <div>
      <div>게스트 {state.totalGuests}명</div>
      {guestCounters(state).map((counter, idx) => (
        <GuestCounter key={idx} who={counter.who} type={counter.type} cnt={counter.cnt} handler={dispatch} />
      ))}
    </div>
  );
};

export default SetPeople;
