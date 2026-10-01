import styled from 'styled-components'
import React from 'react'
import themes from './themes'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'

const BackTextButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
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
    <BackTextButton {...props} />
  </ComponentThemeProvider>
)
