import React from 'react'
import PropTypes from 'prop-types'
import * as RadixSwitch from '@radix-ui/react-switch'
import styled from 'styled-components'

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
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 25px;
  height: 15px;
  background-color: orange;
  position: relative;
  border-radius: 25px;

  &:focus {
    outline: none;
    boxshadow: 0 0 0 2px blue;
  }

  &[data-state='checked'] {
    background-color: red;
  }
`

const Thumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 13px;
  height: 13px;
  background-color: white;
  border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px;
  transition: transform 100ms;
  transform: translateX(1px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(11px);
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
