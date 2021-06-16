import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTable, useRowSelect } from 'react-table'
import Checkbox from '../checkbox'

const Table = ({ columns, data, selectable, onSelectedRowsChange }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    setHiddenColumns,
    visibleColumns,
  } = useTable({ columns, data }, useRowSelect, hooks =>
    hooks.visibleColumns.push(cols => [
      {
        id: 'selectable',
        Header: ({ getToggleAllRowsSelectedProps }) => {
          const { onChange, ...props } = getToggleAllRowsSelectedProps()
          return <Checkbox {...props} onCheckedChange={onChange} />
        },
        Cell: ({ row }) => {
          const { onChange, ...props } = row.getToggleRowSelectedProps()
          return <Checkbox {...props} onCheckedChange={onChange} />
        },
      },
      ...cols,
    ]),
  )

  // Hide or show the select column
  useEffect(() => {
    setHiddenColumns([!selectable && 'selectable'])
  }, [setHiddenColumns, selectable])

  // Run onSelectedRowChange
  useEffect(() => {
    if (typeof onSelectedRowsChange === 'function') {
      onSelectedRowsChange(selectedFlatRows)
    }
  }, [onSelectedRowsChange, selectedFlatRows])

  return (
    <table
      className="w-full"
      {...getTableProps()}
      selected={selectedFlatRows.length}
    >
      <thead>
        {headerGroups.map(({ getHeaderGroupProps, headers }) => (
          <tr {...getHeaderGroupProps()}>
            {headers.map(({ getHeaderProps, render }) => (
              <th className="text-left" {...getHeaderProps()}>
                {render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(({ getCellProps, render }) => (
                <td className="border-b border-gray-300" {...getCellProps()}>
                  {render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
      <tfoot className="table-row-group">
        <tr>
          <td colSpan={visibleColumns.length}>{rows.length} resultat</td>
        </tr>
      </tfoot>
    </table>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  selectable: PropTypes.bool,
  onSelectedRowsChange: PropTypes.func,
}

Table.defaultProps = {
  selectable: false,
  onSelectedRowsChange: null,
}

export default Table
