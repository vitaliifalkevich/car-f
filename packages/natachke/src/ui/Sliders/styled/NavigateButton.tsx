import React from 'react'
import styled from 'styled-components'
import arrow from 'assets/icons/sliderArrow.svg'

const Container = styled.button<{ direction: 'prev' | 'next' }>`
  border: none;
  cursor: pointer;
  background: transparent;
  ${({ direction }) => direction === 'next' && 'transform: rotate(180deg);'}
  transition: 0.5s transform;
  img {
    transition: 0.5s transform;
  }
  &:hover {
    transform: ${({ direction }) =>
      direction === 'next' ? 'rotate(180deg) scale(1, 0.9)' : 'scale(1, 0.9)'};
    img {
      transform: translate(-3px, 0);
    }
  }
`

interface ButtonProps {
  direction: 'prev' | 'next'
  onClick?: () => void
}
const NavigateButton: React.FC<ButtonProps> = props => {
  const { direction } = props
  return (
    <Container {...props}>
      <img src={arrow} alt={direction === 'prev' ? 'previous' : 'next'} />
    </Container>
  )
}

export default React.memo(NavigateButton)
