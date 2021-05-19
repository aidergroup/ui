import React, { forwardRef } from 'react'
import {
  Root,
  Trigger,
  Arrow,
  Group,
  RadioGroup,
  Content as RadixContent,
  Label as RadixLabel,
  Item as RadixItem,
  CheckboxItem as RadixCheckboxItem,
  ItemIndicator as RadixItemIndicator,
  RadioItem as RadixRadioItem,
  Separator as RadixSeparator,
} from '@radix-ui/react-dropdown-menu'
import tw, { styled } from 'twin.macro'

import Icon from '../icon'

const Content = styled(RadixContent)`
  ${tw`border bg-white border-black border-opacity-10 shadow-sm rounded-lg overflow-hidden`}
`
const Label = styled(RadixLabel)`
  ${tw`text-xs px-2 mt-1 text-gray-800`}
`
const Item = styled(RadixItem)`
  ${tw`flex w-full items-center text-sm font-medium px-3 py-2.5 outline-none hover:bg-gray-300`}
`

const CheckboxItem = styled(RadixCheckboxItem)`
  ${tw`flex w-full px-2 items-center text-sm font-medium px-3 py-2.5 outline-none hover:bg-gray-300`}
`

const ItemIndicator = forwardRef((props, ref) => (
  <RadixItemIndicator {...props} ref={ref}>
    <Icon
      name="check"
      className="text-blue-600 fill-current w-2.5 h-2.5 mr-1"
    />
  </RadixItemIndicator>
))

const RadioItem = styled(RadixRadioItem)`
  ${tw`flex items-center px-3 py-2.5 text-sm font-medium outline-none hover:bg-gray-300`}
`
const Separator = styled(RadixSeparator)`
  ${tw`h-px flex mx-2 bg-gray-400`}
`

export {
  Root,
  Trigger,
  Arrow,
  Group,
  RadioGroup,
  Content,
  Label,
  Item,
  CheckboxItem,
  ItemIndicator,
  RadioItem,
  Separator,
}
