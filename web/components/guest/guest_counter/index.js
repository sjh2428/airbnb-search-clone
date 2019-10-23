import React from 'react';
import variables from '../guest-variables';
import { Button } from 'antd';
import { SpaceBetween } from '../../../styles';

const { ADULT_TYPE, ACTION_INCREMENT, ACTION_DECREMENT } = variables;

const GuestCounter = props => {
  const { type, cnt, who, handler } = props;

  return (
    <SpaceBetween style={{ width: '150px' }}>
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
        <Button
          disabled={type === ADULT_TYPE ? cnt >= 16 : cnt >= 5}
          style={{ marginLeft: '5px' }}
          shape="circle"
          onClick={() => handler({ type: ACTION_INCREMENT, who })}>
          +
        </Button>
      </div>
    </SpaceBetween>
  );
};

export default GuestCounter;
