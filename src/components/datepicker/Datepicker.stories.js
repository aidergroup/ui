import React, { useState } from 'react'
import Datepicker from '.'

const Template = args => {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(null)

	const onChange = dates => {
		// Dates är inte en array om det bara finns ett.

		const [start, end] = dates
		setStartDate(start)
		setEndDate(end)
	}

	return (
		<Datepicker
			selectsRange={false}
			onChange={onChange}
			startDate={startDate}
			endDate={endDate}
			{...args}
		/>
	)
}

export const Default = Template.bind({})

export default {
	title: 'Components/Datepicker',
	component: Datepicker,
}
