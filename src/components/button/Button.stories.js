import React from 'react'
import Button from '.'

const Template = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Button Title',
  variant: 'primary',
  disabled: false,
}

export const Block = Template.bind({})

Block.args = {
  title: 'Button Title',
  variant: 'primary',
  className: 'w-full',
  disabled: false,
}

export default {
  title: 'Components/Button',
  component: Button,
}
