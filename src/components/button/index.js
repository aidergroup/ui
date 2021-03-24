import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const VARIANTS = {
  primary:
    'text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring-2 ring-blue-400',
  secondary:
    'text-black border-gray-400 bg-white hover:bg-gray-200 focus:ring-2 ring-gray-400',
  tertiary: 'text-black bg-white-none hover:bg-gray-300 focus:bg-gray-300',
  destructive:
    'text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-2 ring-red-400',
}

const Button = React.forwardRef((props, ref) => {
  const { title, className, type, block, variant, isLoading, ...rest } = props

  const classes = classNames(
    'border border-transparent relative focus:outline-none rounded-full disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed outline-none px-5 py-2 font-medium transition duration-300',
    className,
    (variant && VARIANTS[variant]) || null,
  )

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...rest} ref={ref} type={type} className={classes}>
      <span className={isLoading ? 'animate-pulse' : undefined}>{title}</span>
    </button>
  )
})

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  title: '',
  type: 'button',
  className: '',
  variant: 'primary',
  isLoading: false,
}

export default Button
