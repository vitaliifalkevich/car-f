import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { media } from 'styles/media'
import styled from 'styled-components'
import { CardPlaceholder } from 'ui/placeholders'

const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  height: 117px;
  margin-bottom: 10px;
  ${media.mobile`
    height: 100px;
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
  if (!props.link) return null

  return (
    <Container className="image-card-container">
      {!imageLoadWithError && (
        <Link to={props.link}>
          <Image
            {...props}
            onError={onError}
            onLoad={onLoad}
            opacity={isLoaded ? '1' : '0'}
          />
        </Link>
      )}
      <CardPlaceholder />
    </Container>
  )
}
