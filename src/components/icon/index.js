import React from 'react'
import PropTypes from 'prop-types'

import {
  AddUser,
  ArrowUp,
  Airplane,
  Alert,
  AndroidLogo,
  AppleLogo,
  ArrowBottomLeft,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowTopRight,
  BankId,
  BankIdMono,
  Bank,
  Bell,
  Binocular,
  Bold,
  Book,
  BrokenLink,
  Calculator,
  Calendar,
  Camera,
  Check,
  CheckboxCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clip,
  Cloud,
  Cog,
  Cross,
  Eye,
  Folder,
  FolderOpen,
  Grid,
  Handshake,
  HelpWheel,
  House,
  Inbox,
  Info,
  Intercom,
  Italic,
  LockOpen,
  Menu,
  Message,
  Options,
  Pencil,
  Plus,
  Pdf,
  QuestionCircle,
  Quill,
  Refresh,
  Reply,
  Search,
  Shield,
  StopSign,
  ThumbsUp,
  Toy,
  Trash,
  Underline,
  Upload,
  UserCircle,
  Warning,
  WindowsLogo,
} from '../../assets/icons'

export const ELEMENTS = {
  'add-user': <AddUser />,
  'arrow-up': <ArrowUp />,
  airplane: <Airplane />,
  alert: <Alert />,
  'android-logo': <AndroidLogo />,
  'apple-logo': <AppleLogo />,
  'arrow-bottom-left': <ArrowBottomLeft />,
  'arrow-down': <ArrowDown />,
  'arrow-left': <ArrowLeft />,
  'arrow-right': <ArrowRight />,
  'arrow-top-right': <ArrowTopRight />,
  'bank-id': <BankId />,
  'bank-id-mono': <BankIdMono />,
  bank: <Bank />,
  bell: <Bell />,
  binocular: <Binocular />,
  bold: <Bold />,
  book: <Book />,
  'broken-link': <BrokenLink />,
  calculator: <Calculator />,
  calendar: <Calendar />,
  camera: <Camera />,
  check: <Check />,
  'checkbox-circle': <CheckboxCircle />,
  'chevron-down': <ChevronDown />,
  'chevron-left': <ChevronLeft />,
  'chevron-right': <ChevronRight />,
  'chevron-up': <ChevronUp />,
  clip: <Clip />,
  cloud: <Cloud />,
  cog: <Cog />,
  cross: <Cross />,
  eye: <Eye />,
  folder: <Folder />,
  'folder-open': <FolderOpen />,
  grid: <Grid />,
  handshake: <Handshake />,
  'help-wheel': <HelpWheel />,
  house: <House />,
  inbox: <Inbox />,
  info: <Info />,
  intercom: <Intercom />,
  italic: <Italic />,
  'lock-open': <LockOpen />,
  menu: <Menu />,
  message: <Message />,
  options: <Options />,
  pencil: <Pencil />,
  plus: <Plus />,
  pdf: <Pdf />,
  'question-circle': <QuestionCircle />,
  quill: <Quill />,
  refresh: <Refresh />,
  reply: <Reply />,
  search: <Search />,
  shield: <Shield />,
  'stop-sign': <StopSign />,
  'thumbs-up': <ThumbsUp />,
  toy: <Toy />,
  trash: <Trash />,
  underline: <Underline />,
  upload: <Upload />,
  'user-circle': <UserCircle />,
  warning: <Warning />,
  'windows-logo': <WindowsLogo />,
}

const Icon = ({ name, ...props }) => {
  const el = ELEMENTS[name] || ELEMENTS.bell
  return React.cloneElement(el, { ...props }, { ...el.children })
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(ELEMENTS)),
}

Icon.defaultProps = {
  name: 'bell',
}

export default Icon
