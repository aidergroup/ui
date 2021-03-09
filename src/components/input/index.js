import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import * as Tooltip from '@radix-ui/react-tooltip'

const Input = ({ id, label, tooltip, light, error, className, ...props }) => (
  <div className={className}>
    <div className="flex items-center justify-between mb-2">
      {typeof label === 'string' && (
        <div className="flex items-center">
          <label
            htmlFor={id}
            className={`block text-sm font-medium mr-1 ${
              light ? 'text-white' : 'text-black'
            }`}
          >
            <span className="inline-block">{label}</span>
          </label>
          {typeof tooltip === 'string' && (
            <Tooltip.Root>
              <Tooltip.Trigger className="focus:outline-none focus:ring-2 hover:ring-1 ring-gray-600 transition-shadow h-4 w-4 rounded flex items-center justify-center bg-gray-400">
                <span className="text-gray-800 text-xs font-medium">?</span>
              </Tooltip.Trigger>
              <StyledContent
                sideOffset={6}
                side="right"
                className="px-2 py-1 items-center flex bg-gray-400 rounded-md"
              >
                <div className="text-sm text-gray-800">{tooltip}</div>
                <Tooltip.Arrow
                  offset={0}
                  className="fill-current text-gray-400"
                />
              </StyledContent>
            </Tooltip.Root>
          )}
        </div>
      )}
      {typeof error === 'string' && (
        <span className="text-red-500 text-sm text-right font-medium">
          {error}
        </span>
      )}
    </div>
    <input
      id={id}
      className="focus:ring-2 ring-gray-300 focus:outline-none placeholder-gray-700 rounded-lg border border-gray-500 bg-white font-medium px-4 py-2 transition-shadow w-full"
      error={error}
      {...props}
    />
  </div>
)

const fadeIn = keyframes`
  0% { opacity: 0 },
  100% { opacity: 1},
`

const StyledContent = styled(Tooltip.Content)`
  animation: ${fadeIn} 0.25s;
`

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  error: PropTypes.string,
  light: PropTypes.bool,
  className: PropTypes.string,
}

Input.defaultProps = {
  label: '',
  tooltip: '',
  error: '',
  light: false,
  className: '',
}

export default Input
