import React, { useState } from 'react'
import { media } from 'styles/media'
import styled from 'styled-components'
import { CardPlaceholder } from 'ui/placeholders'

const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 24px;
  height: 440px;
  margin-bottom: 10px;
  & > div {
    border-radius: 24px;
  }
  ${media.tablet`
    height: 317px;
  `}
  ${media.mobile`
    height: 65vw;
    margin-bottom: 7px;
    
    &>div:last-child {
      border-radius: 0;
    }
  `}
`

const Image = styled.img<{ opacity }>`
  cursor: pointer;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 10;
  opacity: ${({ opacity = '1' }) => opacity};
  ${media.mobile`
    border-radius: 0;
  `}
`

export default props => {
  const [imageLoadWithError, setImageLoadWithError] = useState(false)
  const [isLoaded, setLoaded] = useState(false)

  const onError = e => {
    setImageLoadWithError(true)
  }
  const onLoad = () => {
    setLoaded(true)
  }
  return (
    <Container>
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
