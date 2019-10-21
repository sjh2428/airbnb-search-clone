import React, { useReducer } from 'react';
import GuestCounter from './guest-counter';
import setGuestsReducer from './guest-reducer';
import guestCounters from './guest-datas';
import variables from './guest-variables';

const { TOTAL_STATE_KEY, ADULT_STATE_KEY, CHILD_STATE_KEY, INFANT_STATE_KEY } = variables;

const SetPeople = () => {
  const initState = {};
  initState[TOTAL_STATE_KEY] = 0;
  initState[ADULT_STATE_KEY] = 0;
  initState[CHILD_STATE_KEY] = 0;
  initState[INFANT_STATE_KEY] = 0;

  const [state, dispatch] = useReducer(setGuestsReducer, initState);

  return (
    <div>
      <div>게스트 {state[TOTAL_STATE_KEY]}명</div>
      {guestCounters(state).map((counter, idx) => (
        <GuestCounter key={idx} who={counter.who} type={counter.type} cnt={counter.cnt} handler={dispatch} />
      ))}
    </div>
  );
};

export default SetPeople;
