import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 19px;
  line-height: 22px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  margin-top: 7px;
`

export default ({ children }) => (
  <ComponentThemeProvider themes={themes}>
    <Title>{children}</Title>
  </ComponentThemeProvider>
)
