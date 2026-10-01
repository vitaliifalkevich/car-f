import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/media'
import leftSmallSliderArrow from 'assets/icons/leftSmallSliderArrow.svg'
import rightSmallSliderArrow from 'assets/icons/rightSmallSliderArrow.svg'

const Container = styled.div<{ direction: 'prev' | 'next' }>`
  position: absolute;
  z-index: 10;
  top: 0;
  height: 100%;
  width: 9%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${({ direction }) => (direction === 'prev' ? 'left: 0' : 'right: 0')};
  background: ${({ theme, direction }) =>
    direction === 'next'
      ? theme.colors.navigationBackgroundGradientRight
      : theme.colors.navigationBackgroundGradientLeft};
  cursor: pointer;
`

const Arrow = styled.img<{ direction: 'prev' | 'next' }>`
  margin-right: ${({ direction }) => (direction === 'next' ? '5px' : '30px')};
  ${media.mobile`
    margin-right: ${({ direction }) => (direction === 'next' ? '5px' : '20px')};
  `}
`

export default ({ direction, onClick }) => (
  <>
    <Container direction={direction} onClick={onClick}>
      <Arrow
        src={
          direction === 'prev' ? leftSmallSliderArrow : rightSmallSliderArrow
        }
        direction={direction}
        alt={direction === 'prev' ? 'previous' : 'next'}
      />
    </Container>
  </>
)
