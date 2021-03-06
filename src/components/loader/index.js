import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => (
  <div className="space-x-1 flex">
    <Indicator className="h-2 w-2 bg-blue-300 rounded-full" />
    <Indicator className="h-2 w-2 bg-blue-400 rounded-full" />
    <Indicator className="h-2 w-2 bg-blue-500 rounded-full" />
  </div>
)

const Bounce = keyframes`
  0% { transform: translateY(0%); }
  50% { transform: translateY(100%) }
  100% { transform: translateY(0%) }
`

const Indicator = styled.div`
  animation: ${Bounce} 1s infinite;
  &:nth-child(2) {
    animation-delay: 0.05s;
  }
  &:nth-child(3) {
    animation-delay: 0.1s;
  }
`

export default Loader
