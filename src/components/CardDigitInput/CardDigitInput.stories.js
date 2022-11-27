import React from 'react';
import CardDigitInput from './CardDigitInput';

export default {
  component: CardDigitInput,
  title: 'Card Digit Input',
};

const Template = args => <CardDigitInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  index: 0,
  digit: '5',
  onChange: (value, index) => { },
};