import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'

const Container = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 15px;
  line-height: 18px;
  margin: 10px 0;
  display: inline-block;
`

const Text = styled.span`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
  &:hover {
    border: none;
  }
`

export default ({ name, onClick }) => {
  return (
    <ComponentThemeProvider themes={themes}>
      <Container onClick={onClick}>
        + <Text>{name}</Text>
      </Container>
    </ComponentThemeProvider>
  )
}
