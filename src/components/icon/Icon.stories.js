import React from 'react'
import Icon, { ELEMENTS } from '.'

export const Default = ({ className }) => (
  <div className="flex flex-wrap">
    {Object.keys(ELEMENTS).map(name => (
      <div className="flex flex-col w-32 items-center justify-center p-3">
        <Icon name={name} className={className} />
        <span className="block mt-3 text-xs">{name}</span>
      </div>
    ))}
  </div>
)

Default.args = {
  className: 'fill-current text-blue-500 w-6 h-6',
  name: '',
}

export default {
  title: 'Components/Icon',
  component: Icon,
}
