import React, { useState, useContext } from 'react';
import { EntireContext } from '../../contexts/entire';
import { Popover, Slider, Button, InputNumber } from 'antd';
import { SpaceBetween } from '../../styles';
import { MIN_PRICE, MAX_PRICE, PRICE_STEP } from './price-variables';

const Price = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(EntireContext).filter.price;
  const [visible, setVisible] = useState(false);
  const handleVisible = v => setVisible(v);

  const setPrices = ([min, max]) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const sliderProps = {
    range: true,
    value: [minPrice, maxPrice],
    step: PRICE_STEP,
    min: MIN_PRICE,
    max: MAX_PRICE,
    tipFormatter: null,
  };

  const popoverProps = {
    placement: 'bottomLeft',
    title: (
      <>
        <Slider {...sliderProps} onChange={setPrices} />
        <InputNumber value={minPrice * (1 / PRICE_STEP)} onChange={min => setMinPrice(min / (1 / PRICE_STEP))} />
        <InputNumber value={maxPrice * (1 / PRICE_STEP)} onChange={max => setMaxPrice(max / (1 / PRICE_STEP))} />
      </>
    ),
    content: (
      <SpaceBetween>
        <Button onClick={() => setPrices([MIN_PRICE, MAX_PRICE])}>지우기</Button>
        <Button onClick={() => setVisible(false)}>저장</Button>
      </SpaceBetween>
    ),
    trigger: 'click',
  };

  const getBtnChild = () => {
    if (minPrice !== MIN_PRICE && maxPrice !== MAX_PRICE) {
      return `₩${minPrice * (1 / PRICE_STEP)} ~ ₩${maxPrice * (1 / PRICE_STEP)}`;
    } else if (minPrice !== MIN_PRICE && maxPrice === MAX_PRICE) {
      return `₩${minPrice * (1 / PRICE_STEP)}+`;
    } else if (minPrice === MIN_PRICE && maxPrice !== MAX_PRICE) {
      return `최대 ₩${maxPrice * (1 / PRICE_STEP)}`;
    }
    return '가격';
  };

  return (
    <Popover {...popoverProps} visible={visible} onVisibleChange={handleVisible}>
      <Button>{getBtnChild()}</Button>
    </Popover>
  );
};

export default Price;
