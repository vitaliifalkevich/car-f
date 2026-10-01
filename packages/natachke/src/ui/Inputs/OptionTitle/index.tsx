import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const OptionTitle = styled.div<{ fontWeight?: 'bold' | 'regular' }>`
  font-size: 15px;
  line-height: 18px;
  font-family: ${({ theme, fontWeight = 'bold' }) =>
    fontWeight === 'bold'
      ? theme.fonts.ralewayBold
      : theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.optionTitle};
  display: flex;
  align-items: center;
  display: inline-block;
`

export default ({ children, ...props }) => (
  <ComponentThemeProvider themes={themes}>
    <OptionTitle {...props}>{children}</OptionTitle>
  </ComponentThemeProvider>
)
