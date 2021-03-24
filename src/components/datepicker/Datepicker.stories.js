import React, { useState } from 'react'
import Datepicker, { DatepickerInput } from '.'

const DefaultTemplate = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Datepicker
      onChange={date => setStartDate(date)}
      startDate={startDate}
      selected={startDate}
      inline
    />
  )
}

export const Default = DefaultTemplate.bind({})

const MonthTemplate = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Datepicker
      onChange={date => setStartDate(date)}
      startDate={startDate}
      selected={startDate}
      selectsRange={false}
      showMonthYearPicker
      inline
    />
  )
}

export const Month = MonthTemplate.bind({})

const CustomInputTemplate = () => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <Datepicker
      id="date"
      onChange={date => setStartDate(date)}
      startDate={startDate}
      selected={startDate}
      customInput={
        <DatepickerInput
          startDate={startDate}
          id="date"
          label="Välj datum"
          tooltip="Välj ett datum!"
        />
      }
    />
  )
}

export const CustomInput = CustomInputTemplate.bind({})

const CustomInputRangeTemplate = () => {
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
      selected={startDate}
      shouldCloseOnSelect={false}
      selectsRange
      customInput={
        <DatepickerInput selectsRange startDate={startDate} endDate={endDate} />
      }
    />
  )
}

export const CustomInputRange = CustomInputRangeTemplate.bind({})

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
}
