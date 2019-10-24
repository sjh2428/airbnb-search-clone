import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardGrid from '../card';
import { REMOTE, REMOTE_PORT } from '../../env';
import L from '../../fx/L';
import _ from '../../fx/_';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center;
`;

const CardContainer = () => {
  const [cardData, setCardData] = useState(null);
  const [totalCardCount, setTotalCardCount] = useState(null);

  useEffect(() => {
    fetch(`http://${REMOTE}:${REMOTE_PORT}/api/room`)
      .then(res => res.json())
      .then(json => {
        setTotalCardCount(`${json.count}개의 숙소`);
        setCardData(_.go(json.rows, L.map(row => <CardGrid key={row.room_id} {...row} />), _.take(20)));
      })
      .catch(err => {
        console.log(err);
        setCardData('Loading Error');
        setTotalCardCount('Loading Error');
      });
  }, []);

  return (
    <>
      <h2>{totalCardCount ? totalCardCount : '불러오는 중...'}</h2>
      <hr style={{ border: '1px solid #EBEBEB' }} />
      <Container>{cardData}</Container>
    </>
  );
};

export default CardContainer;
