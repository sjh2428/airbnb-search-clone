import React, { useContext } from 'react';
import { EntireContext } from '../../contexts/entire';
import { Popover, Slider, Button, InputNumber } from 'antd';
import { SpaceBetween } from '../../styles';

const Price = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(EntireContext).filter.price;

  const setPrices = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const sliderProps = {
    range: true,
    value: [minPrice, maxPrice],
    step: 0.000001,
    min: 0,
    max: 1,
    tipFormatter: null,
  };

  const popoverProps = {
    placement: 'bottomLeft',
    title: (
      <>
        <Slider {...sliderProps} onChange={setPrices} />
        <InputNumber value={minPrice * 1000000} onChange={min => setMinPrice(min / 1000000)} />
        <InputNumber value={maxPrice * 1000000} onChange={max => setMaxPrice(max / 1000000)} />
      </>
    ),
    content: (
      <SpaceBetween>
        <Button>지우기</Button>
        <Button>저장</Button>
      </SpaceBetween>
    ),
    trigger: 'click',
  };

  return (
    <Popover {...popoverProps}>
      <Button>가격</Button>
    </Popover>
  );
};

export default Price;
