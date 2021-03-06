import React from 'react'
import Loader from '.'

const Template = args => <Loader {...args} />

export const Default = Template.bind({})

export default {
  title: 'Components/Loader',
  component: Loader,
}
