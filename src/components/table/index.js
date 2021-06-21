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
    <div className="border border-gray-300 rounded- overflow-hidden">
      <table
        className="w-full"
        {...getTableProps()}
        selected={selectedFlatRows.length}
      >
        <thead className="bg-gray-200 border-b border-gray-300">
          {headerGroups.map(({ getHeaderGroupProps, headers }) => (
            <tr {...getHeaderGroupProps()}>
              {headers.map(({ id, getHeaderProps, render }) => (
                <th
                  className={`py-2 text-sm ${
                    id === 'selectable' ? 'w-0 pl-3' : 'w-auto px-3'
                  } font-medium text-gray-800 text-left`}
                  {...getHeaderProps()}
                >
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
              <tr className="border-b border-gray-300" {...row.getRowProps()}>
                {row.cells.map(({ column, getCellProps, render }) => (
                  <td
                    className={`py-3 ${
                      column.id === 'selectable' ? 'w-0 pl-3' : 'w-auto px-3'
                    }`}
                    {...getCellProps()}
                  >
                    {render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
        <tfoot className="table-row-group">
          <tr>
            <td
              className="px-3 py-3 font-medium"
              colSpan={visibleColumns.length}
            >
              {rows.length} resultat
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({ Header: PropTypes.node }))
    .isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  selectable: PropTypes.bool,
  onSelectedRowsChange: PropTypes.func,
}

Table.defaultProps = {
  selectable: false,
  onSelectedRowsChange: null,
}

export default Table
