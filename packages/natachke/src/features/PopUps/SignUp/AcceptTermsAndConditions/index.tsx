import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from '../../../../ui/Text/TextLink/themes'
import React from 'react'

const AcceptTermsAndConditions = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-top: 22px;
  a {
    font-size: 12px;
    line-height: 14px;
  }
`

export default props => (
  <ComponentThemeProvider themes={themes}>
    <AcceptTermsAndConditions {...props} />
  </ComponentThemeProvider>
)
