import {
  Root,
  Trigger as RadixTrigger,
  Content as RadixContent,
  Arrow as RadixArrow,
} from '@radix-ui/react-dropdown-menu'
import tw, { styled } from 'twin.macro'

const Trigger = styled(RadixTrigger)`
  ${tw`focus:outline-none`}
`

const Content = styled(RadixContent)`
  ${tw`px-2 py-1 items-center text-sm flex bg-gray-300 text-gray-800 rounded-md`}
`

const Arrow = styled(RadixArrow)`
  ${tw`fill-current text-gray-400`}
`

export { Root, Trigger, Content, Arrow }
