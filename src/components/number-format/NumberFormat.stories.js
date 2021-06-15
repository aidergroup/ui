import React from 'react'
import NumberFormat from '.'

const Template = args => <NumberFormat {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'test',
  label: 'Amount',
  placeholder: 'Placeholder',
  tooltip: 'This is a tooltip created to guide the user.',
  error: null,
  disabled: false,
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 2,
}

export default {
  title: 'Components/NumberFormat',
  component: NumberFormat,
}
