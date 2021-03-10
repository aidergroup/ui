import React, { useState } from 'react'
import * as Dropdown from '.'
import Avatar from '../avatar'
import Datepicker from '../datepicker'

const Template = args => (
	<Dropdown.Root {...args}>
		<Dropdown.Trigger>
			<Avatar name="Albin Sven Gunnar Martinsson" />
		</Dropdown.Trigger>
		<Dropdown.Content>
			<Dropdown.Group>
				<Dropdown.Label>Inloggad som</Dropdown.Label>
				<div className="font-medium px-2">Albin Sven Gunnar Martinsson</div>
			</Dropdown.Group>
			<Dropdown.Separator />
			<Dropdown.Group>
				<Dropdown.Item onSelect={() => alert('Logga ut')}>
					Logga ut
				</Dropdown.Item>
				<Dropdown.Item onSelect={() => alert('Gå till inställningar')}>
					Inställningar
				</Dropdown.Item>
			</Dropdown.Group>
		</Dropdown.Content>
	</Dropdown.Root>
)

export const Default = Template.bind({})

const RadioTemplate = args => (
	<Dropdown.Root {...args}>
		<Dropdown.Trigger>
			<button type="button">Välj huvudman</button>
		</Dropdown.Trigger>
		<Dropdown.Content>
			<Dropdown.RadioGroup value="1">
				<Dropdown.RadioItem checked value="1">
					<Dropdown.ItemIndicator />
					Albin Sven Gunnar Martinsson
				</Dropdown.RadioItem>
				<Dropdown.RadioItem checked value="2">
					<Dropdown.ItemIndicator />
					Karl David Felix Öhlin
				</Dropdown.RadioItem>
				<Dropdown.RadioItem checked value="3">
					<Dropdown.ItemIndicator />
					Sebastian Tage Marcus Marcusson
				</Dropdown.RadioItem>
				<Dropdown.RadioItem checked value="4">
					<Dropdown.ItemIndicator />
					Ulf Mattsson
				</Dropdown.RadioItem>
			</Dropdown.RadioGroup>
		</Dropdown.Content>
	</Dropdown.Root>
)

export const Radio = RadioTemplate.bind({})

const DatepickerTemplate = args => {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(null)

	const onChange = dates => {
		if (!dates.length) {
			setStartDate(dates)
		} else {
			const [start, end] = dates
			setStartDate(start)
			setEndDate(end)
		}
	}

	return (
		<Dropdown.Root {...args}>
			<Dropdown.Trigger>
				<button type="button">Välj datum</button>
			</Dropdown.Trigger>
			<Dropdown.Content>
				<Datepicker
					inline
					onChange={onChange}
					startDate={startDate}
					endDate={endDate}
					{...args}
				/>
			</Dropdown.Content>
		</Dropdown.Root>
	)
}

export const WithDatepicker = DatepickerTemplate.bind({})

Default.args = {}

export default {
	title: 'Components/Dropdown',
	component: Dropdown,
}
