import React, { useEffect, useRef } from 'react'
import Modal from 'ui/Modal'
import { Container, Image } from './styled'
import { useBreakpoint } from 'MediaQueriesProvider'

interface FullScreenModeProps {
  images: string[]
  active: number
  onClose: () => void
}

const FullScreenMode: React.FC<FullScreenModeProps> = ({
  images,
  active,
  onClose,
}) => {
  const breakpoints = useBreakpoint()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (containerRef.current) {
        const elementToScroll = containerRef?.current?.childNodes[
          active
        ] as HTMLImageElement

        if (elementToScroll) {
          elementToScroll.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        }
      }
    }, 100)
  }, [active])
  return (
    <Modal
      fullScreen={true}
      insideClose={false}
      onClose={onClose}
      padding={(breakpoints.mobile || breakpoints.tablet) && '10px'}
    >
      <Container ref={containerRef}>
        {images?.map((image, idx) => (
          <Image
            key={`car${image}_${idx}`}
            src={image}
            alt="car"
            id={idx === 1 ? 'test' : undefined}
          />
        ))}
      </Container>
    </Modal>
  )
}

export default FullScreenMode
