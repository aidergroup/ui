import React from 'react'
import Switch from '.'

const Template = args => <Switch {...args} />

export const Default = Template.bind({})

Default.args = {
  disabled: false,
  checked: false,
}

export default {
  title: 'Components/Switch',
  component: Switch,
}
