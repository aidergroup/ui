import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTable, useRowSelect } from 'react-table'
import tw, { styled } from 'twin.macro'

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
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <table
        className="w-full"
        {...getTableProps()}
        selected={!!selectedFlatRows.length}
      >
        <thead className="bg-gray-200 border-b border-gray-300">
          {headerGroups.map(({ getHeaderGroupProps, headers }) => (
            <Row
              selectable={selectable}
              selected={!!selectedFlatRows.length}
              {...getHeaderGroupProps()}
            >
              {headers.map(({ id, getHeaderProps, render }) => (
                <Cell
                  className="h-10 text-xs font-medium text-gray-800 text-left uppercase"
                  isCheckbox={id === 'selectable' && selectable}
                  {...getHeaderProps()}
                >
                  {render('Header')}
                </Cell>
              ))}
            </Row>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <Row
                selectable={selectable}
                selected={!!selectedFlatRows.length}
                {...row.getRowProps()}
              >
                {row.cells.map(({ column, getCellProps, render }) => (
                  <Cell
                    isCheckbox={column.id === 'selectable' && selectable}
                    {...getCellProps()}
                  >
                    {render('Cell')}
                  </Cell>
                ))}
              </Row>
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

const Cell = styled.td`
  ${tw`h-14`}
  ${({ isCheckbox }) =>
    isCheckbox
      ? tw`px-3 absolute w-12 items-center flex opacity-0 duration-200 transition-opacity`
      : tw`w-auto px-3 duration-100 transition transform`}
`

const Row = styled.tr`
  ${tw`relative border-b border-gray-300 hover:bg-gray-100`}

  ${Cell}:nth-child(1) {
    ${({ selected }) => selected && tw`opacity-100`}
  }

  ${Cell}:nth-child(2) {
    ${({ selected }) => selected && tw`translate-x-7`}
  }

  &:hover {
    ${Cell}:nth-child(1) {
      ${({ selectable }) => selectable && tw`opacity-100`}
    }
    ${Cell}:nth-child(2) {
      ${({ selectable }) => selectable && tw`translate-x-7`}
    }
  }
`

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
