import React from 'react'
import Button from '../../components/button'
import useModal from '.'

const Demo = () => {
  const { openModal, closeModal, isOpen, Modal } = useModal()

  return (
    <div>
      <Button onClick={openModal} title="Öppna modal" />
      <Modal visible={isOpen}>
        <div className="p-6 bg-white rounded-xl w-96">
          <div className="text-xl font-medium mb-2">
            Välkommen till modalen!
          </div>
          <div className="text-base font-regular text-gray-800 mb-6">
            Stäng modalen genom att klicka utanför eller på någon av knapparna
            nedan.
          </div>
          <div className="flex justify-between">
            <Button variant="secondary" title="Avbryt" onClick={closeModal} />
            <Button variant="primary" title="Godkänn" onClick={closeModal} />
          </div>
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
