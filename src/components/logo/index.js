import React from 'react'
import PropTypes from 'prop-types'

const COLORS = {
  default: ['#009AC8', '#006B8F'],
  white: ['#FFFFFF', '#FFFFFF'],
  black: ['#000000', '#000000'],
}

const Logo = ({ fill = 'default', variant = 'default', ...props }) => {
  if (variant === 'badge') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
        <path
          className="text-blue-200 fill-current"
          d="M0 2a2 2 0 012-2h28a2 2 0 012 2v28a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
        />
        <path
          className="text-blue-700 fill-current"
          fillRule="evenodd"
          d="M25.95 26.667L17.437 5.333h-2.89L6 26.667h1.32l8.074-20.203h1.225l8.012 20.203h1.32zm-2.356 0l-2.733-7.007h-9.803l-2.796 7.007H9.55l2.262-5.876h8.232l2.262 5.876h1.288zm-3.016-7.698L15.991 7.313l-4.65 11.656h9.237zm-1.634-1.1h-5.97l2.986-7.76 2.984 7.76z"
          clipRule="evenodd"
        />
      </svg>
    )
  }

  const fills = COLORS[fill] || COLORS.default

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 104 24"
    >
      <g fillRule="evenodd" clipPath="url(#clip0)" clipRule="evenodd">
        <path
          fill={fills[0]}
          d="M79.052 24v-1.272H65.087V1.449h13.269V.177H63.799V24h15.253zm0-2.192v-1.272H67.351V13.36h9.96v-1.237H66.062v9.684h12.99zM77.311 11.24v-1.237h-9.96V3.641h11.005V2.368H66.062v8.872h11.249zM100.783 24l-7.07-10.745h-6.164V24h1.289v-9.508h4.179L99.216 24h1.567zm-6.86-11.558c3.098 0 5.432-1.556 5.432-5.16 0-3.147-2.299-4.985-5.224-4.985H87.55v10.145h6.373zM103.672 24l-6.721-10.003c2.681-.884 4.701-3.04 4.701-6.751 0-4.525-3.343-7.07-7.418-7.07h-8.95V24h1.289V1.414h7.661c3.378 0 6.13 2.191 6.13 5.832 0 4.03-2.89 5.69-5.538 5.973L102.071 24h1.602zM88.838 11.204V3.57h5.293c2.229 0 3.935 1.378 3.935 3.711 0 2.651-1.741 3.923-4.144 3.923h-5.084z"
        />
        <path
          fill={fills[1]}
          d="M22.114 24L12.676 0H9.472L0 24h1.462l8.95-22.728h1.359L20.65 24h1.463zm-2.612 0l-3.03-7.882H5.607L2.507 24h1.428l2.507-6.61h9.125L18.074 24h1.428zm-3.343-8.66L11.074 2.227 5.92 15.34H16.16zm-1.811-1.237H7.73l3.309-8.73 3.308 8.73zm31.55 7.706c5.921 0 8.95-3.995 8.95-9.72 0-5.974-3.482-9.72-8.95-9.72h-7.034v19.44h7.035zm-8.009.919V1.449h8.184c6.721 0 9.855 4.843 9.855 10.604 0 5.797-3.343 10.675-9.855 10.675h-8.184zM46.073 24c7.383 0 11.144-5.408 11.144-11.947C57.217 5.549 53.7.177 46.073.177H36.6V24h9.473zm-5.92-3.464V3.641h5.746c4.701 0 7.661 3.287 7.661 8.447 0 4.949-2.577 8.448-7.661 8.448h-5.746z"
        />
        <path fill={fills[0]} d="M28.347 24h1.289V.177h-1.289V24z" />
        <path fill={fills[1]} d="M26.118 24h1.289V.177h-1.289V24z" />
      </g>
    </svg>
  )
}

Logo.propTypes = {
  fill: PropTypes.oneOf(Object.keys(COLORS)),
  variant: PropTypes.oneOf(['default', 'badge']),
}

Logo.defaultProps = {
  fill: 'default',
  variant: 'default',
}

export default Logo
