import React from 'react'
import SelectCreatable from '.'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const Template = args => <SelectCreatable {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'icecream',
  label: 'Select flavor',
  options,
}

export const Empty = Template.bind({})

Empty.args = {
  name: 'icecream',
  label: 'Select flavor',
  options: [],
}

export const isLoading = Template.bind({})

isLoading.args = {
  name: 'icecream',
  label: 'Select flavor',
  options: [],
  isLoading: true,
}

export default {
  title: 'Components/SelectCreatable',
  component: SelectCreatable,
}
