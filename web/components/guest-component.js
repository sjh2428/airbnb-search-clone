import React, { useReducer } from 'react';
import GuestCounter from './guest-count-component';

const setGuestsReducer = (state, action) => {
  const getWho = {
    adult: 'adultGuests',
    child: 'childGuests',
    infant: 'infantGuests',
  };
  const result = { ...state };
  const guestType = getWho[action.who];
  if (action.type === 'increment') {
    result[guestType] = state[guestType] + 1;
    if (action.who !== 'adult' && state.adultGuests === 0) {
      result.adultGuests = state.adultGuests + 1;
      result.totalGuests = state.totalGuests + 2;
      return result;
    } else {
      result.totalGuests = state.totalGuests + 1;
      return result;
    }
  } else if (action.type === 'decrement') {
    if (result[guestType] > 0) {
      result.totalGuests = result.totalGuests ? result.totalGuests - 1 : 0;
    }
    result[guestType] = result[guestType] ? state[guestType] - 1 : 0;
    return result;
  } else {
    throw new Error();
  }
};

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
      <GuestCounter who="adult" type="성인" cnt={state.adultGuests} handler={dispatch} />
      <GuestCounter who="child" type="어린이" cnt={state.childGuests} handler={dispatch} />
      <GuestCounter who="infant" type="유아" cnt={state.infantGuests} handler={dispatch} />
    </div>
  );
};

export default SetPeople;
