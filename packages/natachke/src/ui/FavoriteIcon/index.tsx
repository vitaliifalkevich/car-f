import React from 'react'
import styled, { css } from 'styled-components'
import { heart, heartHover } from 'assets/icons/heart/assets'

const loadingFavorite = css`
  @keyframes loadingFavorite {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

const FavoriteIcon = styled.div<{
  size?: 'sm' | 'md'
  isFavorite: boolean
  isLoading: boolean
}>`
  ${loadingFavorite}
  width: ${({ size = 'sm' }) => (size === 'sm' ? '20px' : '23px')};
  height: ${({ size = 'sm' }) => (size === 'sm' ? '18px' : '20px')};
  cursor: pointer;
  background: url(${({ isFavorite }) => (isFavorite ? heartHover : heart)})
    center center no-repeat;
  background-size: cover;
  transition: 0.3s transform;

  ${({ isLoading }) =>
    isLoading ? `animation: loadingFavorite .3s infinite;` : ''}
  &:hover {
    transform: scale(1.1);
  }
`

export default props => <FavoriteIcon {...props} />
