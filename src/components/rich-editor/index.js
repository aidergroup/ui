import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css'

import Icon from '../icon'
import IconButton from '../icon-button'

const RichEditor = ({
  editorState,
  onChange,
  error,
  actions,
  disabled,
  handlePastedText,
  stripPastedStyles,
  maxHeight,
}) => {
  const editor = useRef(null)

  function focusEditor() {
    editor.current.focus()
  }

  const applyStyle = style => {
    onChange(RichUtils.toggleInlineStyle(editorState, style))
  }

  const toggleBlockType = blockType => {
    onChange(RichUtils.toggleBlockType(editorState, blockType))
  }

  const getBlockStyle = block => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote'
      default:
        return null
    }
  }

  return (
    <div
      className={`border border-gray-300 rounded-lg w-full overflow-hidden bg-white ${
        disabled && 'cursor-not-allowed'
      }`}
    >
      <div
        className="px-4 py-4 overflow-scroll hover:cursor-text"
        style={{ maxHeight: maxHeight ?? 500 }}
        onClick={focusEditor}
      >
        <Editor
          ref={editor}
          readOnly={disabled}
          editorState={editorState}
          handlePastedText={handlePastedText}
          stripPastedStyles={stripPastedStyles}
          onChange={onChange}
          blockStyleFn={getBlockStyle}
        />
        {!!error && (
          <div className="inline-block px-3 py-1 mt-2 text-sm font-medium text-white rounded bg-red">{error}</div>
        )}
      </div>
      <div className="flex items-center justify-between px-3 py-1 border-t border-gray-300">
        <div className="flex">
          <IconButton
            type="button"
            disabled={disabled}
            icon={<Icon name="bold" className="w-3 h-3 text-black" />}
            onClick={() => applyStyle('BOLD')}
          />
          <IconButton
            type="button"
            disabled={disabled}
            icon={<Icon name="italic" className="w-3 h-3 text-black" />}
            onClick={() => applyStyle('ITALIC')}
          />
          <IconButton
            type="button"
            disabled={disabled}
            icon={<Icon name="list-bulleted" className="w-3 h-3 text-black" />}
            onClick={() => toggleBlockType('unordered-list-item')}
          />
          <span
            className="inline-flex items-center px-2 py-2 ml-4 text-xs font-medium tracking-wide uppercase transition duration-300 bg-white rounded-md cursor-pointer hover:bg-gray-300"
            onClick={() => toggleBlockType('header-one')}
          >
            rubrik
          </span>
          <span
            className="inline-flex items-center px-2 py-2 text-xs font-medium tracking-wide uppercase transition duration-300 bg-white rounded-md cursor-pointer hover:bg-gray-300"
            onClick={() => toggleBlockType('unstyled')}
          >
            brödtext
          </span>
        </div>
        <div>{!!actions && actions}</div>
      </div>
    </div>
  )
}

RichEditor.propTypes = {
	editorState: PropTypes.shape({}).isRequired,
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	error: PropTypes.string,
	actions: PropTypes.element,
}

RichEditor.defaultProps = {
	disabled: false,
	error: null,
	actions: null,
}

export default RichEditor
