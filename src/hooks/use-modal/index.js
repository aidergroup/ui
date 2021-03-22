import React, { useRef, useCallback } from 'react'
import usePortal from 'react-useportal'
import styled from 'styled-components'
import tw from 'twin.macro'

const useModal = ({ onOpen, onClose, ...config } = {}) => {
  const modal = useRef()

  const { isOpen, togglePortal, openPortal, closePortal, Portal } = usePortal({
    onOpen(event) {
      if (typeof onOpen === 'function') {
        onOpen(event)
      }
    },
    onClose(event) {
      if (typeof onClose === 'function') {
        onClose(event)
      }
    },
    onPortalClick({ target }) {
      const clickingOutsideModal =
        modal && modal.current && !modal.current.contains(target)
      if (clickingOutsideModal) {
        closePortal()
      }
    },
    ...config,
  })

  const Modal = useCallback(
    props => (
      <Portal>
        <Backdrop>
          <Container ref={modal} {...props} />
        </Backdrop>
      </Portal>
    ),
    [],
  )

  return Object.assign([openPortal, closePortal, isOpen, Modal, togglePortal], {
    Modal,
    toggleModal: togglePortal,
    openModal: openPortal,
    closeModal: closePortal,
    isOpen,
  })
}

const Container = styled.div`
  ${tw`flex flex-col bg-white shadow-lg rounded-xl overflow-hidden`}
  max-width: 640px;
  max-height: 800px;
`

const Backdrop = styled.div`
  ${tw`flex fixed top-0 left-0 items-center justify-center w-screen h-screen z-40`}
  background-color: rgba(0, 0, 0, 0.45);
`

export default useModal
