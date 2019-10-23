import React, { useContext } from 'react';
import { EntireContext } from '../../contexts/entire';
import { Popover, Slider } from 'antd';

const Price = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(EntireContext).filter.price;

  const sliderProps = {
    range: true,
    defaultValue: [minPrice, maxPrice],
    step: 0.01,
    min: 0,
    max: 1,
    tipFormatter: null,
  };

  const popoverProps = {
    placement: 'bottomLeft',
    title: null,
    content: <Slider {...sliderProps} />,
    trigger: 'click',
  };

  return <Popover {...popoverProps}>{}</Popover>;
};

export default Price;
