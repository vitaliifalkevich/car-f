import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const Label = styled.label`
  font-size: 15px;
  line-height: 18px;
  font-family: ${props => props.theme.fonts.ralewayBold};
  display: block;
  color: ${({ theme }) => theme.colors.labelColor};
  margin-top: 8px;
  margin-bottom: 3px;
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <Label {...props} />
  </ComponentThemeProvider>
)
