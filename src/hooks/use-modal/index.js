import React, { useRef, useCallback } from 'react'
import usePortal from 'react-useportal'
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion, AnimatePresence } from 'framer-motion'

const NULL_EVENT = { currentTarget: { contains: () => false } }

const useModal = ({ ...config } = {}) => {
  const modal = useRef()
  const closeOnClickOutside = config.closeOnClickOutside ?? true

  const { isOpen, togglePortal, openPortal, closePortal, Portal } = usePortal({
    ...config,
  })

  const Modal = useCallback(
    ({ visible, onClose, ...props }) => (
      <Portal>
        <AnimatePresence onExitComplete={onClose}>
          {visible && (
            <Container>
              <ModalContainer
                key="container"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  y: { type: 'spring', duration: 0.35 },
                  opacity: { duration: 0.2 },
                }}
                ref={modal}
                {...props}
              />
              <Backdrop
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.2 } }}
                onClick={() => closeOnClickOutside && closePortal()}
              />
            </Container>
          )}
        </AnimatePresence>
      </Portal>
    ),
    [closePortal, closeOnClickOutside],
  )

  return Object.assign([openPortal, closePortal, isOpen, Modal, togglePortal], {
    // Patch toggleModal, openModal and closeModal. It will break if not passed an event.
    // See https://github.com/alex-cory/react-useportal/issues/36#issuecomment-670319956
    toggleModal: event => {
      togglePortal(event || NULL_EVENT)
    },
    openModal: event => {
      openPortal(event || NULL_EVENT)
    },
    closeModal: event => {
      closePortal(event || NULL_EVENT)
    },
    isOpen,
    Modal,
  })
}

const Container = styled.div`
  ${tw`fixed inset-0 flex items-center justify-center z-50`}
`

const ModalContainer = styled(motion.div)`
  ${tw`relative z-50`}
`

const Backdrop = styled(motion.div)`
  ${tw`fixed inset-0 w-screen h-screen z-40 bg-black bg-opacity-75`}
`

export default useModal
