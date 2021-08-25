import React, { useState } from 'react'
import Table from '.'
import Button from '../button'
import { makeData, columns } from './make-data'

const DefaultTemplate = args => (
  <div className="w-full p-3">
    <Table {...args} />
  </div>
)

export const Default = DefaultTemplate.bind({})

Default.args = {
  selectable: false,
  onSelectedRowsChange: null,
  data: makeData(25),
  columns,
}

const SelectableWithPaginationTemplate = args => {
  const [data, setData] = useState(makeData(25))

  return (
    <div>
      <header className="sticky top-0 p-3 bg-white z-10">
        <Button
          variant="primary"
          type="button"
          title="Fetch more"
          onClick={() => setData([...data, ...makeData(25)])}
        />
      </header>
      <div className="w-full p-3">
        <Table {...args} data={data} />
      </div>
    </div>
  )
}

export const SelectableWithPagination = SelectableWithPaginationTemplate.bind(
  {},
)

SelectableWithPagination.args = {
  selectable: true,
  onSelectedRowsChange: null,
  columns,
}

export default {
  title: 'Components/Table',
  component: Table,
}
