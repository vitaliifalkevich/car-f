import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const activeSvgStyles = css`
  fill: white;
  fill-opacity: 1;
`

const withIconStyles = css<{ active: boolean }>`
  font-size: 10px;
  line-height: 12px;
  padding: 9px 0;
  flex-direction: column;
  svg {
    width: 20px;
    margin-bottom: 5px;
    position: relative;
    z-index: 10;
    path {
      ${({ active }) => active && activeSvgStyles}
    }
  }
`

const Item = styled.div<{
  active: boolean
  value: string | number | boolean
  itemWidth: number
  fontSize?: string
  withIcon: boolean
}>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '12px')};
  line-height: 14px;
  flex: ${({ itemWidth }) => `1 1 ${itemWidth}%`};
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  span {
    position: relative;
    z-index: 10;
    color: ${({ theme, active }) =>
      active ? theme.colors.activeText : theme.colors.text};
  }
  &:after {
    content: '';
    position: absolute;
    opacity: ${({ active }) => (active ? 1 : 0)};
    top: 3px;
    bottom: 3px;
    right: 3px;
    left: 3px;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    background-color: ${({ theme }) => theme.colors.activeBackground};
    z-index: 2;
    border-radius: 5.69px;
  }

  &:hover {
    svg path {
      ${activeSvgStyles}
    }
    span {
      color: ${({ theme }) => theme.colors.activeText};
    }
    &:after {
      background-color: ${({ theme }) => theme.colors.activeBackground};
      opacity: 1;
      transition: 0.3s all;
    }
  }
  ${media.mobile`
    ${({ withIcon }) => withIcon && withIconStyles};
  `}
`

export default Item
