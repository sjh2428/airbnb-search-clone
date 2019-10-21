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

export default setGuestsReducer;
