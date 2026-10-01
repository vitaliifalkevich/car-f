import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'

const SecondaryText = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 13px;
  line-height: 15px;
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <SecondaryText {...props} />
  </ComponentThemeProvider>
)
