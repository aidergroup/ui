import React, { useState } from 'react'
import Datepicker from '.'

const Template = args => {
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
		<Datepicker
			onChange={onChange}
			startDate={startDate}
			endDate={endDate}
			{...args}
		/>
	)
}

export const Default = Template.bind({})

Default.args = {
	selectsRange: true,
	inline: true,
}

export default {
	title: 'Components/Datepicker',
	component: Datepicker,
}
