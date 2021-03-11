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

const Content = styled(RadixContent)`
  ${tw`border bg-white border-gray-400 shadow-sm rounded-lg p-1 max-w-sm`}
`
const Label = styled(RadixLabel)`
  ${tw`text-xs px-2 mt-1 text-gray-800`}
`
const Item = styled(RadixItem)`
  ${tw`flex w-full px-2 items-center font-medium px-2 py-1.5 rounded-md outline-none hover:bg-gray-300`}
`
const Group = styled(RadixGroup)`
  ${tw``}
`
const CheckboxItem = styled(RadixCheckboxItem)`
  ${tw`flex w-full px-2 items-center font-medium px-2 py-1.5 rounded-md outline-none hover:bg-gray-300`}
`
const ItemIndicator = styled(RadixItemIndicator)`
  ${tw`h-2 w-2 bg-blue-500 mr-1 rounded-full`}
`
const RadioGroup = styled(RadixRadioGroup)`
  ${tw``}
`
const RadioItem = styled(RadixRadioItem)`
  ${tw`flex items-center px-2 py-1.5 font-medium rounded-md outline-none hover:bg-gray-300`}
`
const Separator = styled(RadixSeparator)`
  ${tw`h-px flex mx-2 bg-gray-400 my-2`}
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
