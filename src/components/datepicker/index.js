import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDatepicker, { registerLocale } from 'react-datepicker'
import { format } from 'date-fns'
import sv from 'date-fns/locale/sv'

import tw, { styled } from 'twin.macro'

import 'react-datepicker/dist/react-datepicker.css'

import Icon from '../icon'

registerLocale('sv', sv)

const CustomInput = forwardRef(
  ({ selectsRange, startDate, endDate, onClick }, ref) => (
    <button
      type="button"
      className="focus:ring-2 ring-gray-300 focus:outline-none placeholder-gray-700 rounded-lg border border-gray-500 bg-white font-medium px-4 py-2 transition-shadow"
      onClick={onClick}
      ref={ref}
    >
      <div className="space-x-2 flex items-center">
        <div>
          {startDate ? (
            format(startDate, 'PPP', { locale: sv })
          ) : (
            <span className="text-gray-800">Välj datum</span>
          )}
        </div>
        {selectsRange && (
          <Fragment>
            <Icon className="h-2 w-2" name="chevron-right" />
            <div>
              {endDate ? (
                format(endDate, 'PPP', { locale: sv })
              ) : (
                <span className="text-gray-800">Välj datum</span>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </button>
  ),
)

const Datepicker = ({
  inline = false,
  selectsRange = false,
  startDate,
  endDate,
  onChange,
  selected,
  ...props
}) => (
  <Wrapper inline={inline}>
    <ReactDatepicker
      {...props}
      inline={inline}
      selectsRange={selectsRange}
      selected={selected}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      locale="sv"
      shouldCloseOnSelect={!selectsRange}
      customInput={
        <CustomInput
          selectsRange={selectsRange}
          startDate={startDate}
          endDate={endDate}
        />
      }
    />
  </Wrapper>
)

const Wrapper = styled.div`
  & .react-datepicker {
    ${props => (props.inline ? tw`border-none` : tw`border border-gray-400`)}
    ${tw`font-sans border`}
  }

  & .react-datepicker__header {
    ${tw`bg-gray-300 border-b border-gray-400`};
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
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
}

Datepicker.defaultProps = {
  inline: false,
  selectsRange: false,
  endDate: null,
  selected: null,
}

export default Datepicker
