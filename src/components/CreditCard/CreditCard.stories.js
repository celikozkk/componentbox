import React from 'react';
import CreditCard from './CreditCard';

export default {
  component: CreditCard,
  title: 'Credit Card',
};

const Template = args => <CreditCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumber: '0123456789012345',
  pattern: '4-4-4-4'
};

export const LongCardNumber = Template.bind({});
LongCardNumber.args = {
  ...Default.args,
  pattern: '4-4-4-4-4-4',
  cardNumber: '000011112222333344445555',
};