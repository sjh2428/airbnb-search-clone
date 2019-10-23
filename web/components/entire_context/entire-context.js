import React from 'react';
import setGuestsReducer from '../guest/guest-reducer';

export const EntireContext = React.createContext();

const { TOTAL_STATE_KEY, ADULT_STATE_KEY, CHILD_STATE_KEY, INFANT_STATE_KEY } = variables;

const initState = {
  [TOTAL_STATE_KEY]: 0,
  [ADULT_STATE_KEY]: 0,
  [CHILD_STATE_KEY]: 0,
  [INFANT_STATE_KEY]: 0,
};

const EntireContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(setGuestsReducer, initState);
  return <EntireContext.Provider guestVal={{ state, dispatch }}>{children}</EntireContext.Provider>;
};

export default EntireContextProvider;
