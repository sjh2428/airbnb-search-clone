import React, { useState, useContext } from 'react';
import GuestCounter from './guest_counter';
import guestCounters from './guest_counter/counter-datas';
import variables from './guest-variables';
import { Popover, Button } from 'antd';
import styled from 'styled-components';
import { EntireContext } from '../../contexts/entire';

const { TOTAL_STATE_KEY, ADULT_STATE_KEY, CHILD_STATE_KEY, INFANT_STATE_KEY, ACTION_INIT } = variables;

const ButtonOnBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SetPeople = () => {
  const { state, dispatch } = useContext(EntireContext).filter.guest;
  const [visible, setVisible] = useState(false);
  const handleVisible = v => setVisible(v);

  return (
    <Popover
      placement="bottomLeft"
      title={guestCounters(state).map((counter, idx) => {
        const { who, type, cnt } = counter;
        const props = { key: idx, who, type, cnt, handler: dispatch };
        return <GuestCounter {...props} />;
      })}
      content={
        <ButtonOnBottomWrapper>
          <Button onClick={() => dispatch({ type: ACTION_INIT })} disabled={!state[TOTAL_STATE_KEY]}>
            지우기
          </Button>
          <Button onClick={() => setVisible(false)}>저장</Button>
        </ButtonOnBottomWrapper>
      }
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisible}>
      <Button>
        게스트 {state[ADULT_STATE_KEY] + state[CHILD_STATE_KEY]}명{' '}
        {state[INFANT_STATE_KEY] ? `유아 ${state[INFANT_STATE_KEY]}명` : ''}
      </Button>
    </Popover>
  );
};

export default SetPeople;
