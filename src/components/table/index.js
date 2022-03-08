import React, { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTable, useRowSelect } from 'react-table'
import tw, { styled } from 'twin.macro'

import Checkbox from '../checkbox'

const Table = ({ columns, data, selectable, onSelectedRowsChange, onRowClick }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    setHiddenColumns,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        // Update the initial state based on the passed data and check for 'defaultChecked' key.
        // Passing selectedRow as prop itself will not rerender the table.
        selectedRowIds: useMemo(
          () =>
            Array.isArray(data)
              ? data.reduce((acc, { defaultChecked }, index) => {
                  if (defaultChecked) {
                    acc[index] = defaultChecked
                  }
                  return acc
                }, {})
              : {},
          [data],
        ),
      },
    },
    useRowSelect,
    hooks =>
      hooks.visibleColumns.push(cols => [
        {
          id: 'selectable',
          Header: ({ getToggleAllRowsSelectedProps }) => {
            const { onChange, ...props } = getToggleAllRowsSelectedProps()
            return <Checkbox {...props} onCheckedChange={onChange} />
          },
          Cell: x => {
            const { onChange, ...props } = x.row.getToggleRowSelectedProps()
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

  // Callback for selected rows change
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
                className={typeof onRowClick === 'function' ? 'cursor-pointer' : ''}
              >
                {row.cells.map(({ column, getCellProps, render }) => (
                  <Cell
                    isCheckbox={column.id === 'selectable' && selectable}
                    {...getCellProps()}
                    onClick={() => {
                        if (typeof onRowClick === 'function' && column.id !== 'selectable') {
                            onRowClick(row.values.node.id)
                        }
                    }}
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
            <td className="p-3 font-medium" colSpan={visibleColumns.length}>
              {rows.length} resultat
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

const Cell = styled.td`
  ${tw`py-3`}
  ${({ isCheckbox }) =>
    isCheckbox
      ? tw`px-3 absolute w-12 h-full items-center flex opacity-0`
      : tw`relative w-auto px-3 transform`}
`

const Row = styled.tr`
  ${tw`relative align-top border-b border-gray-300 hover:bg-gray-100`}

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
  selectable: PropTypes.bool,
  onSelectedRowsChange: PropTypes.func,
}

Table.defaultProps = {
  selectable: false,
  onSelectedRowsChange: null,
}

export default Table
