import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import CardGrid from '../card';
import { REMOTE, REMOTE_PORT } from '../../env';
import L from '../../fx/L';
import _ from '../../fx/_';
import { EntireContext } from '../../contexts/entire';

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

const CardContainer = () => {
  const [containerState, setContainerdState] = useState(initData);
  const {
    guest: { state },
    date: { startDate, endDate },
    price: { minPrice, maxPrice },
  } = useContext(EntireContext).filter;
  const filters = [state, startDate, endDate, minPrice, maxPrice];

  useEffect(() => {
    if (!containerState.loading) return;
    fetch(`http://${REMOTE}:${REMOTE_PORT}/api/room`)
      .then(res => res.json())
      .then(json => {
        const { rows, count } = json;
        setContainerdState({
          loading: false,
          totalCount: `${count}개의 숙소`,
          card: _.go(rows, L.map(row => <CardGrid key={row.room_id} {...row} />), _.take(20)),
          fetchData: rows,
        });
        window.addEventListener('scroll', scrollHandler(rows));
      })
      .catch(err => {
        console.log(err);
      });
    return () => window.removeEventListener('scroll', scrollHandler());
  }, [...filters]);

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
      <h2>{containerState.totalCount}</h2>
      <hr style={{ border: '1px solid #EBEBEB' }} />
      <Container className={'card-container'}>{containerState.card}</Container>
    </>
  );
};

export default CardContainer;
