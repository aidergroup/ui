import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Editor, RichUtils } from 'draft-js'

import Icon from '../icon'
import IconButton from '../icon-button'

const RichEditor = ({ editorState, onChange, error, actions, disabled }) => {
	const editor = useRef(null)

	function focusEditor() {
		editor.current.focus()
	}

	const applyStyle = style => {
		onChange(RichUtils.toggleInlineStyle(editorState, style))
	}

	return (
		<div
			className={`border border-gray-300 rounded-lg w-full overflow-hidden bg-white ${
				disabled && 'cursor-not-allowed'
			}`}
		>
			<div
				className="py-4 px-4 overflow-scroll hover:cursor-text"
				onClick={focusEditor}
			>
				<Editor
					ref={editor}
					readOnly={disabled}
					editorState={editorState}
					onChange={onChange}
				/>
				{!!error && (
					<div className="px-3 py-1 bg-red mt-2 text-white inline-block rounded text-sm font-medium">
						{error}
					</div>
				)}
			</div>
			<div className="px-3 flex py-2 justify-between items-center border-t border-gray-300">
				<div className="flex">
					<IconButton
						type="button"
						disabled={disabled}
						tertiary
						icon={<Icon name="bold" className="h-3 w-3 text-black" />}
						onClick={() => applyStyle('BOLD')}
					/>
					<IconButton
						type="button"
						disabled={disabled}
						tertiary
						icon={<Icon name="italic" className="h-3 w-3 text-black" />}
						onClick={() => applyStyle('ITALIC')}
					/>
					<IconButton
						type="button"
						disabled={disabled}
						tertiary
						icon={<Icon name="underline" className="h-3 w-3 text-black" />}
						onClick={() => applyStyle('UNDERLINE')}
					/>
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
