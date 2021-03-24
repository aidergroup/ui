import React, { useCallback } from 'react'
import ReactSelect, { components } from 'react-select'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import Icon from '../icon'
import Loader from '../loader'

/**
 * @param {Object} provided -- the component's default styles
 * @param {Object} state -- the component's current state e.g. `isFocused`
 * @returns {Object}
 */
const styles = {
  control: (provided, state) => {
    const classes = tw`duration-300 outline-none placeholder-gray-700 transition-shadow rounded-md border shadow-none border-gray-500 bg-white font-medium hover:border hover:border-gray-400 active:border ring-blue-500`
    const focusStyles = tw`shadow-sm ring-2`
    return state.isFocused
      ? { ...provided, ...classes, ...focusStyles }
      : { ...provided, ...classes }
  },
  option: (_, state) => {
    const defaultClasses = tw`rounded-lg px-2 py-1.5 rounded-md outline-none text-base font-medium transition-colors duration-200 text-black hover:bg-gray-300 focus:bg-gray-400 active:bg-gray-400`
    const selectedClasses = tw`rounded-lg px-2 py-1.5 rounded-md outline-none text-base font-medium transition-colors duration-200 text-black focus:bg-gray-400 active:bg-gray-400 bg-gray-500`
    return state.isSelected ? selectedClasses : defaultClasses
  },
  valueContainer: provided => {
    const classes = tw`px-4 py-1 whitespace-nowrap truncate flex-nowrap`
    return { ...provided, ...classes }
  },
  menu: () =>
    tw`border bg-white border-gray-400 shadow-sm rounded-lg px-1 absolute top-0 w-full mt-12 z-20`,
  placeholder: () => tw`text-base font-medium text-gray-800`,
  singleValue: () =>
    tw`text-base font-medium text-black whitespace-nowrap truncate`,
  noOptionsMessage: () => tw`font-medium text-gray-800 p-2 text-center`,
  loadingMessage: () => tw`px-2 py-6 flex items-center justify-center`,
}

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <div className="px-2">
      <Icon className="h-3 w-3" name="chevron-down" />
    </div>
  </components.DropdownIndicator>
)

const IndicatorSeparator = () => null

const NoOptionsMessage = props => (
  <components.NoOptionsMessage {...props}>
    Det finns inget att välja
  </components.NoOptionsMessage>
)

const LoadingMessage = props => (
  <components.LoadingMessage {...props}>
    <Loader />
  </components.LoadingMessage>
)

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
      <div className="flex items-center justify-between mb-2">
        {typeof label === 'string' && (
          <div className="flex items-center">
            <label
              htmlFor={id}
              className={`block text-sm font-medium mr-1 ${
                light ? 'text-white' : 'text-black'
              }`}
            >
              <span tw="inline-block">{label}</span>
            </label>
          </div>
        )}
        {typeof error === 'string' && (
          <span tw="text-red-500 text-sm text-right font-medium">{error}</span>
        )}
      </div>
      <ReactSelect
        id={id}
        styles={styles}
        onChange={_onChange}
        name={name}
        isDisabled={disabled}
        components={{
          DropdownIndicator,
          IndicatorSeparator,
          NoOptionsMessage,
          LoadingMessage,
        }}
        {...props}
      />
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
