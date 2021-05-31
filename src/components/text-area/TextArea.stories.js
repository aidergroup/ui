import React from 'react'
import TextArea from '.'

const Template = args => <TextArea {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'test',
  label: 'Label',
  placeholder: 'Placeholder',
  tooltip: 'This is a tooltip created to guide the user.',
  error: null,
  type: 'text',
  disabled: false,
  rows: 5,
}

export default {
  title: 'Components/TextArea',
  component: TextArea,
}
