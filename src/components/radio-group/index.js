import {
  Root,
  Item as RadixItem,
  Indicator as RadixIndicator,
} from '@radix-ui/react-radio-group'
import tw, { styled } from 'twin.macro'

const Item = styled(RadixItem)`
  ${tw`appearance-none flex items-center justify-center bg-white border border-gray-400 w-5 h-5 hover:bg-gray-200 transition rounded-full focus:outline-none`}
`

const Indicator = styled(RadixIndicator)`
  ${tw`block h-3 w-3 rounded-full bg-blue-500`}
`
export { Root, Item, Indicator }
