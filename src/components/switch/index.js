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
  ${tw`appearance-none bg-transparent border-none p-0 w-10 transition-colors duration-300 h-5 bg-gray-500 relative rounded-full`}
  &[data-state='checked'] {
    ${tw`bg-blue-500`}
  }
`
const Thumb = styled(RadixSwitch.Thumb)`
  ${tw`block w-5 h-5 bg-white rounded-full shadow-sm border border-gray-400 transition-transform duration-300 transform translate-x-0`}
  &[data-state='checked'] {
    ${tw`translate-x-full`}
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
