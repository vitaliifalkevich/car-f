import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const SecondTitle = styled.h2`
  font-size: 19px;
  line-height: 22px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 0 auto;
`

export default ({ children, style = {} }) => (
  <ComponentThemeProvider themes={themes}>
    <SecondTitle style={style}>{children}</SecondTitle>
  </ComponentThemeProvider>
)
