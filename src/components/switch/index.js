import React from 'react'
import PropTypes from 'prop-types'
import * as RadixSwitch from '@radix-ui/react-switch'
import tw, { styled } from 'twin.macro'

const Switch = ({
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
    <Thumb />
  </Root>
)

const Root = styled(RadixSwitch.Root)`
  ${tw`relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-300 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
  &[data-state='checked'] {
    ${tw`bg-blue-500`}
  }
`
const Thumb = styled(RadixSwitch.Thumb)`
  ${tw`inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0`}
  &[data-state='checked'] {
    ${tw`translate-x-5`}
  }
`

Switch.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
}

Switch.defaultProps = {
  checked: false,
  defaultChecked: false,
  onCheckedChange: null,
  disabled: false,
  required: false,
  readOnly: false,
  name: '',
  value: '',
}

export default Switch
