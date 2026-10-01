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
  align-items: center;
  justify-content: center;
  padding: 8px 30px;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'right' ? 'row' : 'row-reverse'};
  background: ${({ theme, color }) =>
    theme.colors[color] || theme.colors.green};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 14px;
  line-height: 16px;
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
    padding: 10px 9px;
  `}
`

const Icon = styled.img<{ iconPosition?: 'left' | 'right' }>`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin: ${({ iconPosition }) =>
    iconPosition === 'left' ? '0 8px 0 0' : '0 0 0 8px'};
`

const LoadingIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: -2px 0;
`

interface MainButtonProps {
  color?: 'green' | 'blue'
  onClick?: () => void
  icon?: string
  type?: 'button' | 'reset' | 'submit'
  iconPosition?: 'left' | 'right'
  loading?: boolean
  isDisabled?: boolean
}

const SecondaryButton: React.FC<MainButtonProps> = ({
  onClick,
  icon,
  children,
  type = 'button',
  color = 'blue',
  iconPosition = 'left',
  loading,
  isDisabled,
}) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Button
        onClick={onClick}
        type={type}
        color={color}
        iconPosition={iconPosition}
        disabled={loading || isDisabled}
      >
        <span>{children}</span>

        {icon && !loading && (
          <Icon src={icon} alt="icon" iconPosition={iconPosition} />
        )}
        {loading && <LoadingIcon src={loaderIcon} alt="load" />}
      </Button>
    </ComponentThemeProvider>
  )
}

export default SecondaryButton
