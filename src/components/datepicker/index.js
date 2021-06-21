import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDatepicker, { registerLocale } from 'react-datepicker'
import { format } from 'date-fns'
import sv from 'date-fns/locale/sv'
import tw, { styled } from 'twin.macro'
import 'react-datepicker/dist/react-datepicker.css'

import Icon from '../icon'
import * as Tooltip from '../tooltip'

registerLocale('sv', sv)

// Example usage and allowed props at https://reactdatepicker.com/
const Datepicker = ({ inline, ...props }) => (
  <Wrapper inline={inline}>
    <ReactDatepicker
      {...props}
      inline={inline}
      showPopperArrow={false}
      locale="sv"
    />
  </Wrapper>
)

const Wrapper = styled.div`
  & .react-datepicker {
    ${props =>
      props.inline
        ? tw`border-none`
        : tw`border border-black border-opacity-10`}
    ${tw`font-sans border`}
  }

  & .react-datepicker-wrapper {
    ${tw`w-full`}
  }

  & .react-datepicker__header {
    ${tw`bg-gray-200 border-b border-gray-300`};
  }

  & .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    ${tw`font-medium pb-1`}
  }

  & .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    ${tw`text-black outline-none rounded-md`}
  }

  & .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    ${tw`bg-blue-600 text-white `}
  }

  & .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    ${tw`bg-blue-500 text-white`}
  }

  & .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    ${tw`bg-blue-600 text-white`};
  }

  & .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    ${tw`bg-blue-600 text-white`}
  }

  & .react-datepicker__navigation {
    ${tw`outline-none`}
  }
`

Datepicker.propTypes = {
  inline: PropTypes.bool,
  selectsRange: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
}

Datepicker.defaultProps = {
  inline: false,
  selectsRange: false,
  startDate: null,
  endDate: null,
  selected: null,
}

export const DatepickerInput = forwardRef(
  (
    { id, light, label, tooltip, selectsRange, startDate, endDate, ...rest },
    ref,
  ) => (
    <div>
      <div className="flex items-center justify-between mb-2">
        {label && (
          <div className="flex items-center">
            <label
              htmlFor={id}
              className={`block text-sm font-medium mr-1 ${
                light ? 'text-white' : 'text-black'
              }`}
            >
              <span className="inline-block">{label}</span>
            </label>
            {tooltip && (
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <div className="focus:outline-none focus:ring-2 hover:ring-1 ring-gray-500 transition-shadow h-4 w-4 rounded flex items-center justify-center bg-gray-300">
                    <span className="text-gray-800 text-xs font-medium">?</span>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Content sideOffset={6} side="right">
                  <div className="text-sm text-gray-800">{tooltip}</div>
                  <Tooltip.Arrow offset={0} />
                </Tooltip.Content>
              </Tooltip.Root>
            )}
          </div>
        )}
      </div>
      <button
        type="button"
        className="focus:ring-2 focus:border-blue-500 focus:ring-blue-300 focus:outline-none w-full block placeholder-gray-700 rounded-lg border border-gray-300 bg-white font-medium px-4 py-2 transition-shadow"
        ref={ref}
        {...rest}
      >
        <div className="space-x-2 flex items-center">
          {startDate instanceof Date ? (
            <div>{format(startDate, 'PPP', { locale: sv })}</div>
          ) : (
            <div className="text-gray-800">Välj datum</div>
          )}
          {selectsRange && (
            <Fragment>
              <Icon className="h-2 w-2 mr-1" name="chevron-right" />
              {endDate instanceof Date ? (
                <div>{format(endDate, 'PPP', { locale: sv })}</div>
              ) : (
                <div className="text-gray-800">Välj datum</div>
              )}
            </Fragment>
          )}
        </div>
      </button>
    </div>
  ),
)

DatepickerInput.propTypes = {
  id: PropTypes.string.isRequired,
  light: PropTypes.bool,
  label: PropTypes.string,
  tooltip: PropTypes.string,
  selectsRange: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onClick: PropTypes.func.isRequired,
}

DatepickerInput.defaultProps = {
  light: false,
  label: null,
  tooltip: null,
  selectsRange: false,
  startDate: null,
  endDate: null,
}

export default Datepicker
