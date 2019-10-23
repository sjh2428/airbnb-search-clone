import React, { useState, useReducer } from 'react';
import setGuestsReducer from '../components/guest/guest-reducer';
import {
  TOTAL_STATE_KEY,
  ADULT_STATE_KEY,
  CHILD_STATE_KEY,
  INFANT_STATE_KEY,
} from '../components/guest/guest-variables';
import { MIN_PRICE, MAX_PRICE } from '../components/price/price-variables';

export const EntireContext = React.createContext();

const initState = {
  [TOTAL_STATE_KEY]: 0,
  [ADULT_STATE_KEY]: 0,
  [CHILD_STATE_KEY]: 0,
  [INFANT_STATE_KEY]: 0,
};

const EntireContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(setGuestsReducer, initState);

  const [startDate, SetStartDate] = useState(null);
  const [endDate, SetEndDate] = useState(null);

  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const props = {
    value: {
      filter: {
        guest: { state, dispatch },
        date: { startDate, SetStartDate, endDate, SetEndDate },
        price: { minPrice, setMinPrice, maxPrice, setMaxPrice },
      },
    },
  };

  return <EntireContext.Provider {...props}>{children}</EntireContext.Provider>;
};

export default EntireContextProvider;
