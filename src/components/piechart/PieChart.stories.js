import React from 'react'
import PieChart, { colorData } from '.'

const data = [
  { title: 'Övriga utgifter', value: 1600 },
  { title: 'Arvode och sociala avgifter', value: 600 },
  { title: 'Försäkringar', value: 460 },
  { title: 'Hyra och omvårdnad', value: 680 },
]
const colorFrom = '#009AC8'
const colorTo = '#093442'
const total = data.reduce((a, item) => a + item.value, 0)
const coloredData = colorData(data, colorFrom, colorTo)

const Template = args => (
  <div className="w-64">
    <PieChart {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  data: coloredData,
  renderTooltipContent: ({ title, value }) => `${title} - ${value} kr`,
  children: <span className="font-medium">-{total} SEK</span>,
}

export default {
  title: 'Components/PieChart',
  component: PieChart,
}
