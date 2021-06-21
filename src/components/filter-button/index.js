import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon'

const FilterButton = React.forwardRef((props, ref) => {
  const { title, value, ...rest } = props

  return (
    <button
      className="flex items-center space-x-2 rounded-lg transition py-2 px-4 focus:ring-2 focus:border-blue-500 focus:ring-blue-300 focus:outline-none bg-white border border-gray-300 duration-300 disabled:bg-gray-300 disabled:border-none disabled:shadow-none disabled:cursor-not-allowed"
      type="button"
      style={{ width: '160px' }}
      ref={ref}
      {...rest}
    >
      <span className="font-medium text-left text-black">{title}</span>
      <span
        className={`${
          value ? 'text-black' : 'text-gray-600'
        } font-medium text-left text-black truncate flex-1`}
      >
        {value || 'Visa alla'}
      </span>
      <Icon name="chevron-down" className="h-3 w-3 fill-current" />
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
