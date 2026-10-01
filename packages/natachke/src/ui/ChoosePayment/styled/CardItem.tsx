import styled from 'styled-components'
import { media } from 'styles/media'

const CardItem = styled.div<{
  isActive: boolean
  isWalletNotAvailable?: boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: ${({ isWalletNotAvailable }) =>
    isWalletNotAvailable ? 'default' : 'pointer'};
  width: 160px;
  height: 140px;
  border-radius: 24px;
  opacity: ${({ isWalletNotAvailable }) =>
    isWalletNotAvailable ? '0.3' : '1'};
  &:hover {
    background: ${({ theme, isWalletNotAvailable }) =>
      isWalletNotAvailable
        ? theme.colors.cardBackground
        : theme.colors.cardBackgroundActive};
    border: 3px solid
      ${({ theme, isWalletNotAvailable }) =>
        isWalletNotAvailable ? 'transparent' : theme.colors.borderColor};
  }
  border: 3px solid
    ${({ isActive, theme, isWalletNotAvailable }) =>
      isActive && !isWalletNotAvailable
        ? theme.colors.borderColor
        : 'transparent'};
  background: ${({ isActive, theme, isWalletNotAvailable }) =>
    isActive && !isWalletNotAvailable
      ? theme.colors.cardBackgroundActive
      : theme.colors.cardBackground};

  ${media.mobile`
    width: 100%;
  `}
`

export default CardItem
