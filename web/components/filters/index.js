import React, { useReducer, useState } from 'react';
import Guest from '../guest';
import Date from '../date';
import Price from '../price';

const Filters = () => {
  return (
    <>
      <Date />
      <Guest />
      <Price />
    </>
  );
};

export default Filters;
