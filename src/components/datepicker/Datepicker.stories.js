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
		<div className="w-full">
			<Datepicker
				onChange={onChange}
				startDate={startDate}
				endDate={endDate}
				showPopperArrow={false}
				{...args}
			/>
		</div>
	)
}

export const Default = Template.bind({})

Default.args = {
	showMonthYearPicker: false,
	selectsRange: true,
	inline: true,
}

export const MonthPicker = Template.bind({})

MonthPicker.args = {
	showMonthYearPicker: true,
	selectsRange: false,
	inline: true,
}

export default {
	title: 'Components/Datepicker',
	component: Datepicker,
}
