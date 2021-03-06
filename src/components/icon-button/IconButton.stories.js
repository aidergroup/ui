import React from 'react'
import IconButton from '.'
import Icon from '../icon'

const Template = args => <IconButton {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: <Icon name="bell" className="h-4 w-4 fill-current text-white" />,
  variant: 'primary',
  disabled: false,
}

export default {
  title: 'Components/IconButton',
  component: IconButton,
}
