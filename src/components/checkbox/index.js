import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

const Checkbox = ({
  checked,
  defaultChecked,
  indeterminate,
  onCheckedChange,
  disabled,
  required,
  readOnly,
  name,
  value,
  ...props
}) => {
  const [_checked, set] = useState(false)

  useEffect(() => {
    set(indeterminate ? 'indeterminate' : checked)
  }, [indeterminate, checked])

  return (
    <RadixCheckbox.Root
      className="appearance-none flex items-center justify-center bg-white border border-gray-400 w-5 h-5 hover:bg-gray-200 transition rounded-md focus:outline-none"
      checked={_checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      name={name}
      value={value}
      {...props}
    >
      <RadixCheckbox.Indicator>
        {_checked === true && (
          <span className="block w-3.5 rounded bg-blue-500 h-3.5" />
        )}
        {_checked === 'indeterminate' && (
          <span className="block w-2.5 rounded bg-gray-500 h-1" />
        )}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
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
  indeterminate: false,
  onCheckedChange: null,
  disabled: false,
  required: false,
  readOnly: false,
  name: '',
  value: '',
}

export default Checkbox
