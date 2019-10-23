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

const getWho = {
  adult: ADULT_STATE_KEY,
  child: CHILD_STATE_KEY,
  infant: INFANT_STATE_KEY,
};

const setGuestsReducer = (state, action) => {
  const result = { ...state };
  const guestType = getWho[action.who];
  switch (action.type) {
    case ACTION_INCREMENT:
      if (action.who !== ADULT_WHO && state[ADULT_STATE_KEY] === 0) {
        return {
          ...state,
          [guestType]: state[guestType] + 1,
          [ADULT_STATE_KEY]: state[ADULT_STATE_KEY] + 1,
          [TOTAL_STATE_KEY]: state[TOTAL_STATE_KEY] + 2,
        };
      }
      return {
        ...state,
        [guestType]: state[guestType] + 1,
        [TOTAL_STATE_KEY]: state[TOTAL_STATE_KEY] + 1,
      };
    case ACTION_DECREMENT:
      if (result[guestType] > 0) {
        return {
          ...state,
          [TOTAL_STATE_KEY]: state[TOTAL_STATE_KEY] ? state[TOTAL_STATE_KEY] - 1 : 0,
          [guestType]: state[guestType] ? state[guestType] - 1 : 0,
        };
      }
      return {
        ...state,
        [guestType]: state[guestType] ? state[guestType] - 1 : 0,
      };
    case ACTION_INIT:
      return {
        [TOTAL_STATE_KEY]: 0,
        [ADULT_STATE_KEY]: 0,
        [CHILD_STATE_KEY]: 0,
        [INFANT_STATE_KEY]: 0,
      };
    default:
      throw new Error();
  }
};

export default setGuestsReducer;
