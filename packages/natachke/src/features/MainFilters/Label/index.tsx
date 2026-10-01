import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const Label = styled.label`
  font-size: 13.5px;
  line-height: 18px;
  font-family: ${props => props.theme.fonts.ralewayRegular};
  display: block;
  color: ${({ theme }) => theme.colors.labelLightColor};
  margin-top: 8px;
  margin-bottom: 3px;
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <Label {...props} />
  </ComponentThemeProvider>
)
