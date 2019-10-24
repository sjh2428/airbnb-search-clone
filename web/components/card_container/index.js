import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import CardGrid from '../card';
import { REMOTE, REMOTE_PORT } from '../../env';
import L from '../../fx/L';
import _ from '../../fx/_';
import { EntireContext } from '../../contexts/entire';
import { PRICE_STEP, EXCHANGE_RATE } from '../price/price-variables';
import useFetch from './useFetch';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center;
`;

const ROW_PRICE = price => price * EXCHANGE_RATE * PRICE_STEP;
const TAKE_COUNT = 20;

const CardContainer = () => {
  const [containerState, setContainerState] = useState(TAKE_COUNT);
  const {
    guest: { state: guestState },
    date: { startDate, endDate },
    price: { minPrice, maxPrice },
  } = useContext(EntireContext).filter;

  const [data, loading] = useFetch(`http://${REMOTE}:${REMOTE_PORT}/api/room`);

  if (!loading) {
    const scrollHandler = e => {
      const { scrollHeight, clientHeight } = document.body;
      if (scrollHeight - clientHeight === window.scrollY) {
        setContainerState(containerState + TAKE_COUNT);
        window.removeEventListener('scroll', scrollHandler);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return (
      <>
        <h2>{data.rows.length + '개의 숙소'}</h2>
        <hr style={{ border: '1px solid #EBEBEB' }} />
        <Container className={'card-container'}>
          {_.go(
            data.rows,
            L.filter(row => row.accommodates >= guestState.totalGuests),
            L.filter(row => ROW_PRICE(row.price) >= minPrice),
            L.filter(row => ROW_PRICE(row.price) <= maxPrice),
            L.map(row => <CardGrid key={row.room_id} {...row} />),
            _.take(containerState),
          )}
        </Container>
      </>
    );
  }

  return (
    <>
      <h2>{'불러오는 중...'}</h2>
    </>
  );
};

export default CardContainer;
