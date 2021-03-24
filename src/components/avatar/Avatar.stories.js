import React from 'react'
import Avatar from '.'

const Template = args => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'Albin Sven Gunnar Martinsson',
  isLoading: false,
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
}
