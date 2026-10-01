import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  ul {
    display: flex;
    padding: 0;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.fonts.ralewayRegular};
    font-size: 14px;
    & > li {
      margin: 0 3px;
      &.selected {
        & > a {
          color: ${({ theme }) => theme.colors.numberHoverTextColor};
          background: ${({ theme }) => theme.colors.numberHoverBackground};
        }
      }
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.defaultTextColor};
        transition: 0.3s background;
        path {
          fill: ${({ theme }) => theme.colors.defaultTextColor};
        }
        &:hover {
          color: ${({ theme }) => theme.colors.numberHoverTextColor};
          background: ${({ theme }) => theme.colors.numberHoverBackground};
          path {
            fill: ${({ theme }) => theme.colors.arrowHoverColor};
          }
        }
      }
      &.next > a,
      &.previous > a {
        &:hover {
          background: ${({ theme }) => theme.colors.arrowBackgroundHover};
        }
      }
      &.disabled > a {
        cursor: default;
      }
    }
  }
  ${media.mobile`
    ul {
     & > li {
      & > a {
        width: 35px;
        height: 35px;
      }
     }
    }
  `}
`

export default Container
