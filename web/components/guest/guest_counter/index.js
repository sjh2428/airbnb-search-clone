import React from 'react';
import variables from '../guest-variables';
import styled from 'styled-components';
import { Button } from 'antd';

const { ACTION_INCREMENT, ACTION_DECREMENT } = variables;

const CounterBtn = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  outline: none;
`;

const CounterWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const CounterBtnWrapper = styled.div``;

const GuestCounter = props => {
  const { type, cnt, who, handler } = props;

  return (
    <CounterWrapper>
      {type}
      <CounterBtnWrapper>
        <Button style={{ marginRight: '5px' }} shape="circle" onClick={() => handler({ type: ACTION_DECREMENT, who })}>
          -
        </Button>
        {cnt}+
        <Button style={{ marginLeft: '5px' }} shape="circle" onClick={() => handler({ type: ACTION_INCREMENT, who })}>
          +
        </Button>
      </CounterBtnWrapper>
    </CounterWrapper>
  );
};

export default GuestCounter;
