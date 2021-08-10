import React from 'react'
import Input from '.'

const Template = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'test',
  label: 'Label',
  placeholder: 'Placeholder',
  tooltip: 'This is a tooltip created to guide the user.',
  error: null,
  type: 'text',
  disabled: false,
}

export const Currency = Template.bind({})

Currency.args = {
  id: 'test',
  label: 'Label',
  placeholder: 'Placeholder',
  tooltip: 'This is a tooltip created to guide the user.',
  error: null,
  type: 'currency',
  disabled: false,
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 2,
  suffix: 'kr',
}

export default {
  title: 'Components/Input',
  component: Input,
}
