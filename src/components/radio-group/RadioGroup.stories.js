import React, { useState } from 'react'
import * as RadioGroup from '.'

const Template = ({ options }) => {
  const [selectedValue, set] = useState()
  return (
    <div className="flex flex-col space-y-3">
      <RadioGroup.Root className="flex flex-col space-y-2" onValueChange={set}>
        {options.map(({ id, value }) => (
          <label htmlFor={id} key={id} className="flex items-center space-x-1">
            <RadioGroup.Item value={value} id={id}>
              <RadioGroup.Indicator />
            </RadioGroup.Item>
            <span>{value}</span>
          </label>
        ))}
      </RadioGroup.Root>
      <span>{selectedValue}</span>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  options: [
    { id: 1, value: 'Verifierade' },
    { id: 2, value: 'Overifierade' },
    { id: 3, value: 'Visa alla' },
  ],
}
export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
}
