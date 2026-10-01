import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'

const StatusText = styled.div<{ status: 'success' | 'error' }>`
  color: ${({ theme, status }) => theme.colors[status]};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 14px;
`

export default ({ children, status }) => (
  <ComponentThemeProvider themes={themes}>
    <StatusText status={status}>{children}</StatusText>
  </ComponentThemeProvider>
)
