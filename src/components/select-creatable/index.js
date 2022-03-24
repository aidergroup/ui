import React, { useCallback } from 'react'
import CreatableSelect from 'react-select/creatable'
import { components } from 'react-select'
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
    const classes = tw`duration-300 outline-none placeholder-gray-700 transition-shadow rounded-md border hover:border-gray-300 shadow-none border-gray-300 bg-white font-medium ring-blue-300`
    const focusStyles = tw`ring-2 border-blue-500 hover:border-blue-500`
    return state.isFocused
      ? { ...provided, ...classes, ...focusStyles }
      : { ...provided, ...classes }
  },
  option: (_, state) => {
    const defaultClasses = tw`px-3 py-2 rounded-md outline-none text-sm font-medium text-black hover:bg-gray-200 focus:bg-gray-300`
    const selectedClasses = tw`px-3 py-2 rounded-md outline-none text-sm font-medium text-black focus:bg-gray-200 bg-blue-500 text-white`
    return state.isSelected ? selectedClasses : defaultClasses
  },
  valueContainer: provided => {
    const classes = tw`px-4 py-1 whitespace-nowrap truncate flex-nowrap`
    return { ...provided, ...classes }
  },
  menu: () =>
    tw`border px-1 bg-white border-black border-opacity-10 shadow-sm rounded-lg absolute top-0 w-full mt-12 z-10`,
  placeholder: () => tw`text-base font-medium text-gray-800`,
  singleValue: () =>
    tw`text-base font-medium whitespace-nowrap truncate bg-blue-500 text-white rounded px-2`,
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

const SelectCreatable = ({
  id,
  name,
  onChange,
  label,
  className,
  disabled,
  error,
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
      {label && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <label
              htmlFor={id}
              className="block text-sm font-medium mr-1 text-black"
            >
              <span tw="inline-block">{label}</span>
            </label>
          </div>
          {typeof error === 'string' && (
            <span tw="text-red text-sm text-right">{error}</span>
          )}
        </div>
      )}
      <CreatableSelect
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

SelectCreatable.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
}

SelectCreatable.defaultProps = {
  label: '',
  className: '',
  disabled: false,
  error: '',
}

export default SelectCreatable
