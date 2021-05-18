import React from 'react'
import useModal from '.'

const Demo = () => {
  const { openModal, closeModal, isOpen, Modal } = useModal()

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open modal
      </button>
      <Modal visible={isOpen}>
        <div className="flex items-center justify-between p-3">
          <span>
            Click outside the modal to close it, or use the button! 👉
          </span>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded"
            type="button"
            onClick={closeModal}
          >
            Close modal
          </button>
        </div>
      </Modal>
    </div>
  )
}

const Template = () => <Demo />

export const Default = Template.bind({})

export default {
  title: 'Hooks/useModal',
  component: Demo,
}
