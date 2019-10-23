import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardGrid from '../card';
import { REMOTE, REMOTE_PORT } from '../../env';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 10px;
  justify-content: center;
`;

const CardContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://${REMOTE}:${REMOTE_PORT}/api/room`)
      .then(res => res.json())
      .then(json => {
        setData(
          <>
            <CardGrid {...json.rows[0]} />
            <CardGrid {...json.rows[1]} />
            <CardGrid {...json.rows[2]} />
            <CardGrid {...json.rows[3]} />
            <CardGrid {...json.rows[4]} />
            <CardGrid {...json.rows[0]} />
            <CardGrid {...json.rows[1]} />
            <CardGrid {...json.rows[2]} />
            <CardGrid {...json.rows[3]} />
            <CardGrid {...json.rows[4]} />
          </>,
        );
      })
      .catch(err => {
        console.log(err);
        setData('Loading Error');
      });
  }, []);

  return <Container>{data}</Container>;
};

export default CardContainer;
