import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from 'styles/media'
import { CardPlaceholder } from 'ui/placeholders'

const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  height: 134px;
  ${media.tablet`
    height: 130px;
  `}
`

const Image = styled.img<{ opacity: string }>`
  cursor: pointer;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s filter;
  position: relative;
  z-index: 10;
  opacity: ${({ opacity = '1' }) => opacity};
  &:hover {
    filter: brightness(0.8);
  }
`

export default props => {
  const [imageLoadWithError, setImageLoadWithError] = useState(false)
  const [isLoaded, setLoaded] = useState(false)

  const onError = () => {
    setImageLoadWithError(true)
  }
  const onLoad = () => {
    setLoaded(true)
  }
  return (
    <Container className="image-card-container">
      {!imageLoadWithError && (
        <Image
          {...props}
          onError={onError}
          onLoad={onLoad}
          opacity={isLoaded ? '1' : '0'}
        />
      )}
      <CardPlaceholder />
    </Container>
  )
}
