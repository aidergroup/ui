import React from 'react'
import PropTypes from 'prop-types'

import * as Tooltip from '../tooltip'

const TextArea = ({ id, label, tooltip, error, className, ...props }) => (
  <div className={className}>
    <div className="flex items-center justify-between mb-2">
      {label && (
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
      )}
      {typeof error === 'string' && (
        <span className="text-red text-sm text-right">{error}</span>
      )}
    </div>
    <textarea
      id={id}
      className="focus:ring-2 ring-blue-300 focus:border-blue-500 disabled:bg-gray-400 focus:outline-none placeholder-gray-700 rounded-lg border border-gray-300 bg-white font-medium px-4 py-2 transition-shadow w-full appearance-none"
      {...props}
    />
  </div>
)

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
}

TextArea.defaultProps = {
  label: '',
  tooltip: '',
  error: '',
  className: '',
}

export default TextArea
