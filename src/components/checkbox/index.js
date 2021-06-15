import React from 'react'
import PropTypes from 'prop-types'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'
import tw from 'twin.macro'

const Checkbox = ({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  required,
  readOnly,
  name,
  value,
  ...props
}) => (
  <Root
    checked={checked}
    defaultChecked={defaultChecked}
    onCheckedChange={onCheckedChange}
    disabled={disabled}
    required={required}
    readOnly={readOnly}
    name={name}
    value={value}
    {...props}
  >
    <Indicator indeterminate={checked !== 'indeterminate'} />
  </Root>
)

const Root = styled(RadixCheckbox.Root)`
  ${tw`appearance-none flex items-center justify-center bg-transparent border border-gray-600 w-5 h-5 hover:bg-gray-300 transition ring-blue-500 hover:ring-2 focus:ring-2 rounded-md focus:outline-none`}
`

const Indicator = styled(RadixCheckbox.Indicator)`
  ${tw`w-3.5 rounded bg-blue-500 h-3.5`}
  ${props => props.indeterminate && tw`bg-gray-700 h-1`}
`

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
}

Checkbox.defaultProps = {
  checked: false,
  defaultChecked: false,
  onCheckedChange: null,
  disabled: false,
  required: false,
  readOnly: false,
  name: '',
  value: '',
}

export default Checkbox
