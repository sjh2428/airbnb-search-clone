import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import CardDescription from './card-description';

const { Meta } = Card;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  & > img {
    max-width: 100%;
    max-height: 250px;
  }
`;

const CardGrid = ({
  room_name,
  room_summary,
  room_picture_url,
  room_type,
  accommodates,
  price,
  reviewers,
  reviews_score,
  bathrooms,
  bedrooms,
  beds,
  bed_type,
}) => {
  const descriptionProps = {
    room_summary,
    room_type,
    accommodates,
    price,
    reviewers,
    reviews_score,
    bathrooms,
    bedrooms,
    beds,
    bed_type,
  };

  const CardCover = (
    <ImageContainer>
      <img src={room_picture_url} />
    </ImageContainer>
  );

  return (
    <Card hoverable cover={CardCover}>
      <Meta title={room_name} description={<CardDescription {...descriptionProps} />} />
    </Card>
  );
};

export default CardGrid;
