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
  data,
  columns,
  selectable: false,
  onSelectedRowsChange: null,
}

export default {
  title: 'Components/Table',
  component: Table,
}
