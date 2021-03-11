import React from 'react'
import ListItem from '.'

import Button from '../button'

const Template = args => <ListItem {...args} />

export const Horizontal = Template.bind({})

Horizontal.args = {
	variant: 'horizontal',
	title: 'Label',
	children: (
		<div className="flex items-center space-x-3">
			<div className="font-medium">Value</div>
			<Button title="Action" onClick={() => alert('Clicked')} />
		</div>
	),
	border: false,
}

export const Vertical = Template.bind({})

Vertical.args = {
	variant: 'vertical',
	title: 'Label',
	children: <div>Hello!</div>,
	border: false,
}

export default {
	title: 'Components/ListItem',
	component: ListItem,
}
