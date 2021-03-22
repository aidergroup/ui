import React from 'react'
import * as Tooltip from '.'
import Icon from '../icon'

const Template = args => (
	<Tooltip.Root {...args}>
		<Tooltip.Trigger>
			<Icon name="info" className="w-4 h-4 text-gray-800 fill-current" />
		</Tooltip.Trigger>
		<Tooltip.Content sideOffset={6} side="right">
			<Tooltip.Arrow offset={0} />
			This is the tooltip
		</Tooltip.Content>
	</Tooltip.Root>
)

export const Default = Template.bind({})

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
}
