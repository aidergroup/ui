import React from 'react'
import Checkbox from '.'

const Template = args => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {
  defaultChecked: false,
  checked: false,
  onCheckedChange: false,
  required: false,
  readOnly: false,
  name: false,
  value: false,
}

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
}
