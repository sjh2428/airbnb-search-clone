import variables from './guest-variables';

const {
  TOTAL_STATE_KEY,
  ADULT_STATE_KEY,
  CHILD_STATE_KEY,
  INFANT_STATE_KEY,
  ACTION_INCREMENT,
  ACTION_DECREMENT,
  ACTION_INIT,
  ADULT_WHO,
} = variables;

const setGuestsReducer = (state, action) => {
  const getWho = {
    adult: ADULT_STATE_KEY,
    child: CHILD_STATE_KEY,
    infant: INFANT_STATE_KEY,
  };
  const result = { ...state };
  const guestType = getWho[action.who];
  if (action.type === ACTION_INCREMENT) {
    result[guestType] = state[guestType] + 1;
    if (action.who !== ADULT_WHO && state[ADULT_STATE_KEY] === 0) {
      result[ADULT_STATE_KEY] = state[ADULT_STATE_KEY] + 1;
      result[TOTAL_STATE_KEY] = state[TOTAL_STATE_KEY] + 2;
      return result;
    } else {
      result[TOTAL_STATE_KEY] = state[TOTAL_STATE_KEY] + 1;
      return result;
    }
  } else if (action.type === ACTION_DECREMENT) {
    if (result[guestType] > 0) {
      result[TOTAL_STATE_KEY] = result[TOTAL_STATE_KEY] ? result[TOTAL_STATE_KEY] - 1 : 0;
    }
    result[guestType] = result[guestType] ? state[guestType] - 1 : 0;
    return result;
  } else if (action.type === ACTION_INIT) {
    result[TOTAL_STATE_KEY] = 0;
    result[ADULT_STATE_KEY] = 0;
    result[CHILD_STATE_KEY] = 0;
    result[INFANT_STATE_KEY] = 0;
    return result;
  } else {
    throw new Error();
  }
};

export default setGuestsReducer;
