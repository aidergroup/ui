import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

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
  const { name, isLoading, ...rest } = props

  return (
    <div
      {...rest}
      ref={ref}
      disabled={isLoading}
      className={`bg-blue-500 text-sm text-white font-semibold h-10 w-10 flex items-center justify-center rounded-lg ${
        isLoading ? 'animate-pulse' : undefined
      }`}
    >
      {!isLoading && <StyledLabel>{getInitials(name)}</StyledLabel>}
    </div>
  )
})

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledLabel = styled.div`
  animation: ${FadeIn} 0.25s;
`

Avatar.propTypes = {
  name: PropTypes.string,
}

Avatar.defaultProps = {
  name: '',
}

export default Avatar
