import React from 'react'
import PropTypes from 'prop-types'
import tw, { styled } from 'twin.macro'

const VARIANTS = {
  horizontal: 'flex w-full justify-between py-4 space-x-3',
  vertical: 'flex flex-col py-3',
}

const ListItem = ({
  variant = 'horizontal',
  children,
  title,
  border = true,
}) => {
  const classes = (variant && VARIANTS[variant]) || null

  return (
    <Container border={border} className={classes}>
      <div className="font-medium">{title}</div>
      <div>{children}</div>
    </Container>
  )
}

const Container = styled.li`
  ${props => props.border && tw`border-b border-gray-400`}
`

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
