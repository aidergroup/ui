import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const VARIANTS = {
  primary:
    'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:ring-2 ring-blue-400',
  secondary:
    'border-gray-400 bg-white hover:bg-gray-200 active:ring-2 ring-gray-400',
  tertiary: 'bg-white-none hover:bg-gray-300 focus:bg-gray-300',
  destructive:
    'bg-red-500 hover:bg-red-600 focus:bg-red-600 active:ring-2 ring-red-400',
}

const IconButton = ({
  icon,
  className,
  block,
  variant = 'primary',
  type,
  isLoading,
  ...props
}) => {
  const classes = classNames(
    'border border-transparent relative focus:outline-none rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed outline-none px-2 py-2 font-medium transition duration-300',
    className,
    (variant && VARIANTS[variant]) || null,
  )

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props} type={type} className={classes}>
      <span className={isLoading ? 'animate-pulse' : undefined}>{icon}</span>
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.element,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  isLoading: PropTypes.bool,
}

IconButton.defaultProps = {
  icon: '',
  className: '',
  variant: 'primary',
  isLoading: false,
}

export default IconButton
