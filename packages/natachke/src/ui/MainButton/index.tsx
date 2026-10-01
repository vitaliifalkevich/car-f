import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { media } from 'styles/media'
import loaderIcon from 'assets/icons/loader.svg'

const Button = styled.button<{ iconPosition?: 'left' | 'right' }>`
  outline: 0;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: center;
  padding: 14px 30px;
  background: ${({ theme, color }) =>
    theme.colors[color] || theme.colors.green};
  color: ${({ theme, color }) =>
    color === 'grey'
      ? theme.colors.darkTextColor
      : theme.colors.lightTextColor};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 14px;
  line-height: 16px;
  transition: 0.3s background;
  &:hover {
    background: ${({ theme, color }) => theme.colors?.[`${color}Hover`]};
  }
  &:active {
    background: ${({ theme, color }) => theme.colors?.[`${color}Active`]};
  }
  &:disabled {
    cursor: default;
    &:hover {
      background: ${({ theme, color }) =>
        theme.colors[color] || theme.colors.green};
    }
    &:active {
      background: ${({ theme, color }) =>
        theme.colors[color] || theme.colors.green};
    }
    & > span {
      opacity: 0.7;
    }
  }
  ${media.mobile`
    padding: 11px 14px;
  `}
`

const Icon = styled.img<{ iconPosition?: 'left' | 'right' }>`
  width: 16px;
  height: 16px;
  object-fit: contain;
  ${({ iconPosition }) =>
    iconPosition === 'right' ? 'margin-left: 8px' : 'margin-right: 8px'}
`

const LoadingIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: -2px 0;
`

interface MainButtonProps {
  color?: 'green' | 'blue' | 'grey'
  onClick?: () => void
  icon?: string
  iconPosition?: 'left' | 'right'
  type?: 'button' | 'reset' | 'submit'
  loading?: boolean
  isDisabled?: boolean
}

const MainButton: React.FC<MainButtonProps> = ({
  color = 'green',
  onClick,
  icon,
  children,
  type = 'button',
  iconPosition = 'left',
  loading,
  isDisabled,
}) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Button
        onClick={onClick}
        color={color}
        type={type}
        iconPosition={iconPosition}
        disabled={loading || isDisabled}
      >
        {icon && !loading && (
          <Icon src={icon} alt="icon" iconPosition={iconPosition} />
        )}
        <span>{children}</span>
        {loading && <LoadingIcon src={loaderIcon} alt="load" />}
      </Button>
    </ComponentThemeProvider>
  )
}

export default MainButton
