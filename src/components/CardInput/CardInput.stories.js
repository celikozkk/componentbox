import React from 'react';
import CardInput from './CardInput';

export default {
  component: CardInput,
  title: 'Card Input',
};

const Template = args => <CardInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 16,
  cardNumber: '0000111122223333',
  pattern: '4-4-4-4',
};

export const MoreNumberThanSize = Template.bind({});
MoreNumberThanSize.args = {
  ...Default.args,
  cardNumber: '00001111222233334444555566667777',
};

export const With3Patterns = Template.bind({});
With3Patterns.args = {
  ...Default.args,
  pattern: '3-3-3-3',
  cardNumber: '000011112222',
};

export const WithExceedingPatternLast = Template.bind({});
WithExceedingPatternLast.args = {
  ...Default.args,
  pattern: '4-4-4-99',
  cardNumber: '0000111122223333',
};

export const WithExceedingPatternFirst = Template.bind({});
WithExceedingPatternFirst.args = {
  ...Default.args,
  pattern: '99-4-4-4',
  cardNumber: '0000111122223333',
};

export const WithExceedingPatternMiddle = Template.bind({});
WithExceedingPatternMiddle.args = {
  ...Default.args,
  pattern: '4-99-4-4',
  cardNumber: '0000111122223333',
};
