import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon'

const FilterButton = React.forwardRef((props, ref) => {
  const { title, value, ...rest } = props

  return (
    <button
      className={`flex items-center space-x-2 shadow-sm rounded-lg focus:outline-none transition-colors py-1.5 px-4 ${
        value ? 'bg-blue-500' : 'bg-white border border-gray-400'
      }`}
      type="button"
      style={{ width: '160px' }}
      ref={ref}
      {...rest}
    >
      <span
        className={`font-medium text-left ${
          value ? 'text-white' : 'text-gray-800'
        }`}
      >
        {title}
      </span>
      <span
        className={`font-medium text-left ${
          value ? 'text-white' : 'text-black'
        } truncate flex-1`}
      >
        {value || 'Visa alla'}
      </span>
      <Icon
        name="chevron-down"
        className={`h-3 w-3 fill-current transition-colors ${
          value ? 'text-white' : 'text-black'
        } `}
      />
    </button>
  )
})

FilterButton.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
}

FilterButton.defaultProps = {
  value: '',
}

export default FilterButton
