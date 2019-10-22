import React, { useReducer, useState } from 'react';
import Guest from '../guest';
import Date from '../date';

const Filters = () => {
  return (
    <>
      <Date />
      <Guest />
    </>
  );
};

export default Filters;
