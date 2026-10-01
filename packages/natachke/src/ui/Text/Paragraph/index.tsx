import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'
import { media } from 'styles/media'

const Paragraph = styled.h2`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  margin-top: 20px;

  ${media.mobile`
    margin-top: 12px;
    font-size: 14px;
    line-height: 16px;
  `}
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <Paragraph {...props} />
  </ComponentThemeProvider>
)
