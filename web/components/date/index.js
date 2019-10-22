import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, Button } from 'antd';

const { RangePicker } = DatePicker;

const disabledDate = current => current < moment().startOf('day');

const Date = () => {
  const [startDate, SetStartDate] = useState(null);
  const [endDate, SetEndDate] = useState(null);

  const calendarHandler = date => {
    const [start, end] = date;
    SetStartDate(start);
    SetEndDate(end);
  };

  const eraseHandler = () => {
    SetStartDate(null);
    SetEndDate(null);
  };

  return (
    <RangePicker
      placeholder={['start date', 'end date']}
      value={[startDate, endDate]}
      disabledDate={disabledDate}
      format="YYYY-MM-DD"
      onCalendarChange={calendarHandler}
      renderExtraFooter={() => <Button onClick={eraseHandler}>지우기</Button>}
    />
  );
};

export default Date;
