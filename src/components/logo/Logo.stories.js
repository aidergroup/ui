import React from 'react'
import Logo from '.'

const Template = args => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {
  fill: 'default',
  variant: 'default',
  className: 'h-8 w-auto',
}

export const Badge = Template.bind({})

Badge.args = {
  fill: 'default',
  variant: 'badge',
  className: 'h-12 w-12',
}

export default {
  title: 'Components/Logo',
  component: Logo,
}
