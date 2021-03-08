import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDatepicker from 'react-datepicker'
import { format } from 'date-fns'

import Icon from '../icon'

import 'react-datepicker/dist/react-datepicker.css'

const CustomInput = forwardRef(({ startDate, endDate, onClick }, ref) => (
  <button
    type="button"
    className="focus:ring-2 ring-gray-300 focus:outline-none placeholder-gray-700 rounded-lg border border-gray-500 bg-white font-medium px-4 py-2 transition-shadow w-full"
    onClick={onClick}
    ref={ref}
  >
    <div className="space-x-2 flex items-center">
      <div>{startDate ? format(startDate, 'PPP') : 'Välj datum'}</div>
      {endDate && (
        <Fragment>
          <Icon className="h-2 w-2" name="chevron-right" />
          <div>{format(endDate, 'PPP')}</div>
        </Fragment>
      )}
    </div>
  </button>
))

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
    customInput={<CustomInput startDate={startDate} endDate={endDate} />}
  />
)

Datepicker.propTypes = {
  inline: PropTypes.bool,
}

Datepicker.defaultProps = {
  inline: false,
}

export default Datepicker
