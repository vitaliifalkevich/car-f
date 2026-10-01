import React from 'react'
import { Link } from 'react-router-dom'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'

const TextLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover {
    border-bottom: 1px solid transparent;
  }
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <TextLink {...props} />
  </ComponentThemeProvider>
)
