import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import Button from '../button'
import RichEditor from '.'

const Template = args => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty(),
	)

	return (
		<RichEditor {...args} editorState={editorState} onChange={setEditorState} />
	)
}

export const Default = Template.bind({})

Default.args = {
	error: null,
	actions: <Button title="Skicka" onClick={null} />,
	disabled: false,
}

export default {
	title: 'Components/RichEditor',
	component: RichEditor,
}
