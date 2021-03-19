import React from 'react'
import Select from '.'

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
]

const Template = args => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
	name: 'icecream',
	label: 'Select flavor',
	options,
}

export default {
	title: 'Components/Select',
	component: Select,
}
