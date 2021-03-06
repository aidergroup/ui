import React, { useCallback } from 'react'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

/**
 * @param {Object} provided -- the component's default styles
 * @param {Object} state -- the component's current state e.g. `isFocused`
 * @returns {Object}
 */
const styles = {
  control: (provided, state) => {
    const classes = tw`duration-300 outline-none placeholder-gray-700 transition-shadow rounded-md border shadow-none border-gray-500 bg-white font-medium hover:border hover:border-gray-400 active:border active:border-gray-400`
    const shadow = 'box-shadow: 0 0 0 2px #009ac8'
    return state.isFocused
      ? { ...provided, ...classes, ...shadow }
      : { ...provided, ...classes }
  },
  option: (_, state) => {
    const defaultClasses = tw`text-sm font-medium transition-colors duration-200 text-black hover:bg-gray-300 focus:bg-gray-400 active:bg-gray-400`
    const selectedClasses = tw`text-sm font-medium transition-colors duration-200 text-black focus:bg-gray-400 active:bg-gray-400 bg-gray-500`
    return state.isSelected ? selectedClasses : defaultClasses
  },
  valueContainer: provided => {
    const classes = tw`px-4 py-1`
    return { ...provided, ...classes }
  },
  menu: () => tw`border border-gray-400 shadow-lg rounded`,
  placeholder: () => tw`text-sm font-medium text-gray-800`,
  singleValue: () => tw`text-sm font-medium text-black`,
}

const Select = ({
  id,
  name,
  onChange,
  label,
  className,
  disabled,
  error,
  light,
  ...props
}) => {
  /**
   * react-select does not return a native event, so we have to mock an
   * event object and patch the onChange function.
   *
   * @see https://github.com/JedWatson/react-select/issues/667#issuecomment-583151752
   * @see https://github.com/JedWatson/react-select/issues/1631#issuecomment-555986192
   */
  const _onChange = useCallback(
    value => {
      onChange({ currentTarget: { value, name } })
    },
    [onChange, name],
  )

  return (
    <div className={className}>
      {typeof label === 'string' && (
        <label
          htmlFor={id}
          className={`mb-2 block text-sm font-medium ${
            light ? 'text-white' : 'text-black'
          }`}
        >
          <span className="inline-block">{label}</span>
        </label>
      )}
      <ReactSelect
        id={id}
        styles={styles}
        onChange={_onChange}
        name={name}
        isDisabled={disabled}
        {...props}
      />
      {typeof error === 'string' && (
        <span className="leading-tight text-red-500 text-xs font-medium">
          {error}
        </span>
      )}
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  light: PropTypes.bool,
}

Select.defaultProps = {
  label: '',
  className: '',
  disabled: false,
  error: '',
  light: false,
}

export default Select
