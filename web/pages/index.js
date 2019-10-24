import React from 'react';
import Filters from '../components/filters';
import styled from 'styled-components';
import EntireContextProvider from '../contexts/entire';
import CardContainer from '../components/card_container';

const FilterWrapper = styled.div`
  width: 100%;
  border: 1px solid #e4e4e4;
  padding: 5px;
`;

const CardContainerWrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

const Guests = () => {
  return (
    <EntireContextProvider>
      <FilterWrapper>
        <Filters />
      </FilterWrapper>
      <CardContainerWrapper>
        <CardContainer />
      </CardContainerWrapper>
    </EntireContextProvider>
  );
};

export default Guests;
