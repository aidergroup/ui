import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDatepicker, { registerLocale } from 'react-datepicker'
import { format } from 'date-fns'
import sv from 'date-fns/locale/sv'

import Icon from '../icon'

import 'react-datepicker/dist/react-datepicker.css'

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
}) => (
  <ReactDatepicker
    inline={inline}
    selectsRange={selectsRange}
    selected={startDate}
    onChange={onChange}
    startDate={startDate}
    endDate={endDate}
    locale="sv"
    weekDayClassName={() => 'font-sans'}
    dayClassName={() => 'font-sans'}
    shouldCloseOnSelect={!selectsRange}
    customInput={
      <CustomInput
        selectsRange={selectsRange}
        startDate={startDate}
        endDate={endDate}
      />
    }
  />
)

Datepicker.propTypes = {
  inline: PropTypes.bool,
  selectsRange: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
}

Datepicker.defaultProps = {
  inline: false,
  selectsRange: false,
  endDate: null,
}

export default Datepicker
