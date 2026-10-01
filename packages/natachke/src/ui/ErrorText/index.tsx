import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'

const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  font-size: 14px;
  line-height: 100%;
  margin-top: 0;
  position: absolute;
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <ErrorText {...props} />
  </ComponentThemeProvider>
)
