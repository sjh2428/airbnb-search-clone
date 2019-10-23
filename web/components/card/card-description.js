import React from 'react';
import styled from 'styled-components';

const DesWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Summary = styled.div`
  height: 2.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TopMargin = styled.div`
  margin-top: 7px;
`;

const Description = ({
  room_summary,
  room_type,
  bathrooms,
  bedrooms,
  beds,
  bed_type,
  accommodates,
  price,
  reviewers,
  reviews_score,
}) => {
  return (
    <DesWrapper>
      <div>
        <Summary>{room_summary}</Summary>
        <TopMargin>
          인원 {accommodates}명 · {room_type}
        </TopMargin>
        <div>
          욕실 {bathrooms}개 · 침실 {bedrooms}개
        </div>
        <TopMargin>
          {bed_type} {beds}개
        </TopMargin>
        <div>₩{price * 1170}</div>
      </div>
      <div>
        <div>{`🤩 ${(reviews_score / 20).toFixed(1)}(${reviewers})`}</div>
      </div>
    </DesWrapper>
  );
};

export default Description;
