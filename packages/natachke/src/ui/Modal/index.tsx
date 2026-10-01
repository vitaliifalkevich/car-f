import React, { useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, Close, ModalOverlay } from './styled'
import { useCloseCurrentModal } from 'hooks'

const portalNodeId = 'modal'

interface ModalProps {
  width?: string
  height?: string
  bgColor?: string
  onClose?: () => void
  padding?: string
  saveSizesInTablet?: boolean
  fullScreen?: boolean
  insideClose?: boolean
}

const Modal: React.FC<ModalProps> = ({
  children,
  width,
  height,
  bgColor,
  onClose,
  padding,
  saveSizesInTablet = true,
  fullScreen,
  insideClose = true,
}) => {
  const closeWindow = useCloseCurrentModal()
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      html, body {
       overflow-y: hidden;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const onModalClose = useCallback(() => {
    onClose ? onClose() : closeWindow()
  }, [closeWindow, onClose])

  return ReactDOM.createPortal(
    <ComponentThemeProvider themes={themes}>
      <>
        <Container
          color={bgColor}
          width={width}
          height={height}
          padding={padding}
          saveSizesInTablet={saveSizesInTablet}
          fullScreen={fullScreen}
        >
          {children}
          {insideClose && <Close onClick={onModalClose} />}
        </Container>
        {!insideClose && <Close onClick={onModalClose} />}

        <ModalOverlay onClick={onModalClose} />
      </>
    </ComponentThemeProvider>,
    document.getElementById(portalNodeId) as Element,
  )
}

export default Modal
