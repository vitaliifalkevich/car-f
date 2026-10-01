import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const Line = styled.hr`
  background: ${({ theme }) => theme.colors.lineColor};
  height: 2px;
  width: 100%;
  border: none;
`

export default () => (
  <ComponentThemeProvider themes={themes}>
    <Line />
  </ComponentThemeProvider>
)
