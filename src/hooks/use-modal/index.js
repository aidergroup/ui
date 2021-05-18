import React, { useRef, useCallback } from 'react'
import usePortal from 'react-useportal'
import styled from 'styled-components'
import tw from 'twin.macro'

import { motion, AnimatePresence } from 'framer-motion'

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
    ({ visible, ...props }) => (
      <Portal>
        <AnimatePresence>
          {visible && (
            <Container>
              <ModalContainer
                key="container"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                ref={modal}
                {...props}
              />
              <Backdrop
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Container>
          )}
        </AnimatePresence>
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
  ${tw`fixed inset-0 flex items-center justify-center`}
`

const ModalContainer = styled(motion.div)`
  ${tw`relative z-50`}
`

const Backdrop = styled(motion.div)`
  ${tw`fixed inset-0 w-screen h-screen z-40 bg-black bg-opacity-75`}
`

export default useModal
