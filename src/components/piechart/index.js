import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PieChart as Chart } from 'react-minimal-pie-chart'
import ReactTooltip from 'react-tooltip'
import chroma from 'chroma-js'

/**
 * Creates a color scale from two colors and adds a color property to every item of the passed
 * @param  {array}  data      An array of chart data
 * @param  {string} colorFrom A valid color, i.e '#000' or 'blue'
 * @param  {string} colorTo   A valid color, i.e '#000' or 'blue'
 * @return {array}            A colored array
 */
export const colorData = (data, colorFrom, colorTo) => {
  if (!data || !Array.isArray(data)) return []

  const validColorFrom = chroma.valid(colorFrom) ? colorFrom : '#000'
  const validColorTo = chroma.valid(colorTo) ? colorTo : '#000'

  const colors = chroma
    .scale([validColorFrom, validColorTo])
    .mode('lab')
    .colors(data.length)

  return data.map((item, index) => ({ ...item, color: colors[index] }))
}

const PieChart = ({ data, renderTooltipContent }) => {
  const [active, set] = useState(null)

  return (
    <div className="relative" data-tip="" data-for="chart">
      <Chart
        data={data}
        lineWidth={100}
        onMouseOver={(_, index) => set(index)}
        onMouseOut={() => set(null)}
      />
      {typeof renderTooltipContent === 'function' && (
        <ReactTooltip
          id="chart"
          getContent={() =>
            typeof active === 'number'
              ? renderTooltipContent(data[active])
              : null
          }
        />
      )}
    </div>
  )
}

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  renderTooltipContent: PropTypes.func,
}

PieChart.defaultProps = {
  renderTooltipContent: null,
}

export default PieChart
