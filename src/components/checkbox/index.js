import React from 'react'
import PropTypes from 'prop-types'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

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
    <Indicator />
  </Root>
)

const Root = styled(RadixCheckbox.Root)`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
  box-shadow: inset 0 0 0 1px black;
  width: 15px;
  height: 15px;
  border-radius: 2px;

  &:focus {
    outline: none;
    boxshadow: inset 0 0 0 1px blue, 0 0 0 1px blue;
  }
`

const Indicator = styled(RadixCheckbox.Indicator)`
  width: 12px;
  height: 12px;
  background-color: blue;
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
