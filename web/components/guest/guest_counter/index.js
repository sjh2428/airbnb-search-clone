import React from 'react';
import variables from '../guest-variables';
import styled from 'styled-components';
import { Button } from 'antd';

const { ACTION_INCREMENT, ACTION_DECREMENT } = variables;

const CounterWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const GuestCounter = props => {
  const { type, cnt, who, handler } = props;

  return (
    <CounterWrapper>
      {type}
      <div>
        <Button
          disabled={!cnt}
          style={{ marginRight: '5px' }}
          shape="circle"
          onClick={() => handler({ type: ACTION_DECREMENT, who })}>
          -
        </Button>
        {cnt}+
        <Button style={{ marginLeft: '5px' }} shape="circle" onClick={() => handler({ type: ACTION_INCREMENT, who })}>
          +
        </Button>
      </div>
    </CounterWrapper>
  );
};

export default GuestCounter;
