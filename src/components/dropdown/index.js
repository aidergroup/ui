import React from 'react'
import {
  Root,
  Trigger,
  Content as RadixContent,
  Label as RadixLabel,
  Item as RadixItem,
  Group as RadixGroup,
  CheckboxItem as RadixCheckboxItem,
  ItemIndicator as RadixItemIndicator,
  RadioGroup as RadixRadioGroup,
  RadioItem as RadixRadioItem,
  Separator as RadixSeparator,
  Arrow as RadixArrow,
} from '@radix-ui/react-dropdown-menu'
import tw, { styled } from 'twin.macro'

import Icon from '../icon'

const Content = styled(RadixContent)`
  ${tw`border bg-white border-gray-400 shadow-sm rounded-lg max-w-sm`}
`
const Label = styled(RadixLabel)`
  ${tw`text-xs px-2 mt-1 text-gray-800`}
`
const Item = styled(RadixItem)`
  ${tw`flex w-full items-center text-sm font-medium px-3 py-2.5 outline-none hover:bg-gray-300`}
`
const Group = styled(RadixGroup)`
  ${tw``}
`
const CheckboxItem = styled(RadixCheckboxItem)`
  ${tw`flex w-full px-2 items-center text-sm font-medium px-3 py-2.5 outline-none hover:bg-gray-300`}
`

const ItemIndicator = React.forwardRef(forwardedRef => (
  <RadixItemIndicator ref={forwardedRef}>
    <Icon
      name="check"
      className="text-blue-600 fill-current w-2.5 h-2.5 mr-1"
    />
  </RadixItemIndicator>
))

const RadioGroup = styled(RadixRadioGroup)`
  ${tw``}
`
const RadioItem = styled(RadixRadioItem)`
  ${tw`flex items-center px-3 py-2.5 text-sm font-medium outline-none hover:bg-gray-300`}
`
const Separator = styled(RadixSeparator)`
  ${tw`h-px flex mx-2 bg-gray-400`}
`
const Arrow = styled(RadixArrow)``

export {
  Root,
  Trigger,
  Content,
  Label,
  Item,
  Group,
  CheckboxItem,
  ItemIndicator,
  RadioGroup,
  RadioItem,
  Separator,
  Arrow,
}
