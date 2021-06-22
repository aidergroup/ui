import React from 'react'
import Table from '.'
import { makeData, columns } from './make-data'

const data = makeData(25)

const Template = args => (
  <div className="w-full p-3">
    <Table {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  selectable: true,
  onSelectedRowsChange: null,
  data,
  columns,
}

export default {
  title: 'Components/Table',
  component: Table,
}
