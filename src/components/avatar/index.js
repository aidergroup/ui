import React from 'react'
import PropTypes from 'prop-types'

const getInitials = str => {
  if (!str) return null
  const names = str.split(' ')
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }

  return initials
}

const Avatar = React.forwardRef((props, ref) => {
  const { name, ...rest } = props

  return (
    <button
      {...rest}
      ref={ref}
      type="button"
      className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:ring-2 ring-blue-400 focus:outline-none  text-sm text-white font-semibold h-10 w-10 flex items-center justify-center rounded-lg transition duration-200"
    >
      {getInitials(name)}
    </button>
  )
})

Avatar.propTypes = {
  name: PropTypes.string,
}

Avatar.defaultProps = {
  name: '',
}

export default Avatar
