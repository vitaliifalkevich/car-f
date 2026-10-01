import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'

const LegacyText = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <LegacyText {...props} />
  </ComponentThemeProvider>
)
