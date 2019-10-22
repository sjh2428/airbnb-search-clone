import React, { useReducer, useState } from 'react';
import GuestCounter from './guest_counter';
import setGuestsReducer from './guest-reducer';
import guestCounters from './guest_counter/counter-datas';
import variables from './guest-variables';
import { Popover, Button } from 'antd';

const { TOTAL_STATE_KEY, ADULT_STATE_KEY, CHILD_STATE_KEY, INFANT_STATE_KEY, ACTION_INIT } = variables;

const SetPeople = () => {
  const initState = {
    [TOTAL_STATE_KEY]: 0,
    [ADULT_STATE_KEY]: 0,
    [CHILD_STATE_KEY]: 0,
    [INFANT_STATE_KEY]: 0,
  };

  const [state, dispatch] = useReducer(setGuestsReducer, initState);
  const [visible, setVisible] = useState(false);
  const handleVisible = v => setVisible(v);

  const guestCounterJSX = guestCounters(state).map((counter, idx) => {
    const { who, type, cnt } = counter;
    const props = { key: idx, who, type, cnt, handler: dispatch };
    return <GuestCounter {...props} />;
  });

  return (
    <Popover
      placement="bottomLeft"
      title={guestCounterJSX}
      content={
        <div>
          <Button onClick={() => dispatch({ type: ACTION_INIT })} disabled={state[TOTAL_STATE_KEY] ? false : true}>
            지우기
          </Button>
          <Button onClick={() => setVisible(false)}>저장</Button>
        </div>
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisible}>
      <Button>게스트 {state[TOTAL_STATE_KEY]}명</Button>
    </Popover>
  );
};

export default SetPeople;
