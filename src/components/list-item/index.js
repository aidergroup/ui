import React from 'react'
import PropTypes from 'prop-types'

const VARIANTS = {
  horizontal: 'flex w-full justify-between py-4 space-x-3 list-none',
  vertical: 'flex w-full flex-col py-3 list-none',
}

const ListItem = ({
  variant = 'horizontal',
  children,
  title,
  border = true,
}) => {
  const classes = (variant && VARIANTS[variant]) || null

  return (
    <li className={`${classes} ${border && 'border-b border-gray-400'}`}>
      <div className="font-medium">{title}</div>
      <div>{children}</div>
    </li>
  )
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  border: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
}

ListItem.defaultProps = {
  variant: 'primary',
  border: false,
}

export default ListItem
