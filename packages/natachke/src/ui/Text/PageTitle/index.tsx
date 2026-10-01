import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const withBorderStyles = css`
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
`

const PageTitle = styled.h1<{ withBorder?: boolean }>`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 28px;
  line-height: 50px;
  ${({ withBorder }) => withBorder && withBorderStyles}
  ${media.mobile`
    font-size: 21px;
    line-height: 22px;
    margin-top: 15px;
    padding-bottom: 15px;
  `}
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <PageTitle {...props} />
  </ComponentThemeProvider>
)
