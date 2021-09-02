import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

import * as Tooltip from '../tooltip'

const INPUT_CLASSES =
  'focus:ring-2 focus:border-blue-500 focus:ring-blue-300 focus:outline-none placeholder-gray-700 rounded-lg border border-gray-300 bg-white font-medium px-4 py-2 transition-shadow w-full appearance-none'

const Input = ({
  id,
  label,
  tooltip,
  error,
  className,
  type,
  onChange,
  ...props
}) => (
  <div className={className}>
    {label && (
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <label htmlFor={id} className="block text-sm font-medium mr-1">
            <span className="inline-block">{label}</span>
          </label>
          {tooltip && (
            <Tooltip.Root>
              <Tooltip.Trigger>
                <div className="focus:outline-none h-4 w-4 rounded flex items-center justify-center bg-gray-300">
                  <span className="text-gray-800 text-xs font-medium">?</span>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content sideOffset={6} side="right">
                <div className="text-sm text-gray-800">{tooltip}</div>
                <Tooltip.Arrow offset={0} />
              </Tooltip.Content>
            </Tooltip.Root>
          )}
        </div>
        {typeof error === 'string' && (
          <span className="text-red text-sm text-right">{error}</span>
        )}
      </div>
    )}
    {type === 'currency' ? (
      <NumberFormat
        id={id}
        className={INPUT_CLASSES}
        type="text"
        onValueChange={onChange}
        {...props}
      />
    ) : (
      <input
        id={id}
        className={INPUT_CLASSES}
        type={type}
        onChange={onChange}
        {...props}
      />
    )}
  </div>
)

/**
 * A set of props to pass to our input with the type "currency" to format
 * the text after Swedish financial standards
 * @type {Object}
 */
export const FINANCIAL_DEFAULT_PROPS = {
  type: 'currency',
  autoComplete: 'off',
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 2,
  suffix: ' kr',
  // TODO: onChange is marked as required in prop types,
  // but when the type is "currency" we pass onValueChange instead.
  onChange: () => {},
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  label: '',
  tooltip: '',
  error: '',
  className: '',
}

export default Input
