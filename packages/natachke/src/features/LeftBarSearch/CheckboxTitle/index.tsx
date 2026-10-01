import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const CheckboxTitle = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 9px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  grid-gap: 5px;
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <CheckboxTitle {...props} />
  </ComponentThemeProvider>
)
