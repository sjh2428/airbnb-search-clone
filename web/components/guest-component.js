import React, { useReducer } from 'react';
import GuestCounter from './guest-count-component';

const setGuestsReducer = (state, action) => {
  const getWho = {
    성인: 'adultGuests',
    어린이: 'childGuests',
    유아: 'infantGuests',
  };
  const result = { ...state };
  const guestType = getWho[action.who];
  if (action.type === 'increment') {
    result[guestType] = state[guestType] + 1;
    if (action.who !== '성인' && state.adultGuests === 0) {
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
      <GuestCounter type="성인" cnt={state.adultGuests} incHandler={dispatch} decHandler={dispatch} />
      <GuestCounter type="어린이" cnt={state.childGuests} incHandler={dispatch} decHandler={dispatch} />
      <GuestCounter type="유아" cnt={state.infantGuests} incHandler={dispatch} decHandler={dispatch} />
    </div>
  );
};

export default SetPeople;
