import React from 'react'
import FilterButton from '.'

const Template = args => <FilterButton {...args} />

export const Default = Template.bind({})

Default.args = {
	title: 'Title',
}

export const Disabled = Template.bind({})

Disabled.args = {
	title: 'Title',
	disabled: true,
}

export const hasValue = Template.bind({})

hasValue.args = {
	title: 'Title',
	value: 'Value',
}

export default {
	title: 'Components/FilterButton',
	component: FilterButton,
}
