import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import CardGrid from '../card';
import { REMOTE, REMOTE_PORT } from '../../env';
import L from '../../fx/L';
import _ from '../../fx/_';
import { EntireContext } from '../../contexts/entire';
import { PRICE_STEP, EXCHANGE_RATE } from '../price/price-variables';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center;
`;

const initData = {
  card: [],
  totalCount: null,
  fetchData: [],
  loading: true,
};

const ROW_PRICE = price => price * EXCHANGE_RATE * PRICE_STEP;

const CardContainer = () => {
  const [containerState, setContainerdState] = useState(initData);
  const {
    guest: { state: guestState },
    date: { startDate, endDate },
    price: { minPrice, maxPrice },
  } = useContext(EntireContext).filter;

  useEffect(() => {
    fetch(`http://${REMOTE}:${REMOTE_PORT}/api/room`)
      .then(res => res.json())
      .then(json => {
        const { rows, count } = json;
        setContainerdState({
          loading: false,
          totalCount: `${count}개의 숙소중...`,
          card: _.go(
            rows,
            L.filter(row => row.accommodates >= guestState.totalGuests),
            L.filter(row => ROW_PRICE(row.price) >= minPrice),
            L.filter(row => ROW_PRICE(row.price) <= maxPrice),
            L.map(row => <CardGrid key={row.room_id} {...row} />),
            _.take(20),
          ),
          fetchData: rows,
        });
        window.addEventListener('scroll', scrollHandler(rows));
      })
      .catch(err => {
        console.log(err);
      });
    return () => window.removeEventListener('scroll', scrollHandler());
  }, [guestState, startDate, endDate, minPrice, maxPrice]);

  const scrollHandler = rows => () => {
    const { scrollHeight, clientHeight } = document.body;
    if (scrollHeight - clientHeight === window.scrollY) {
      const next = _.go(
        rows,
        L.map(row => <CardGrid key={row.room_id} {...row} />),
        _.take(document.querySelector('.card-container').children.length + 20),
      );
      setContainerdState({
        ...containerState,
        card: next,
      });
    }
  };

  return (
    <>
      <h2>{containerState.totalCount ? containerState.totalCount : '불러오는 중...'}</h2>
      <hr style={{ border: '1px solid #EBEBEB' }} />
      <Container className={'card-container'}>{containerState.card}</Container>
    </>
  );
};

export default CardContainer;
