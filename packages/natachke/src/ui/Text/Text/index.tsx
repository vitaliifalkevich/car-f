import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 14px;
  line-height: 16px;
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <Text {...props} />
  </ComponentThemeProvider>
)
