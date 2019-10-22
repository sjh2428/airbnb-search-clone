import React from 'react';
import Filters from '../components/filters';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  width: 100%;
  border: 1px solid #e4e4e4;
  padding: 5px;
`;

const Guests = () => {
  return (
    <FilterWrapper>
      <Filters />
    </FilterWrapper>
  );
};

export default Guests;
