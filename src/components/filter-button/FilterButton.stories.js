import React from 'react'
import FilterButton from '.'

const Template = args => <FilterButton {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Title',
}

export default {
  title: 'Components/FilterButton',
  component: FilterButton,
}
