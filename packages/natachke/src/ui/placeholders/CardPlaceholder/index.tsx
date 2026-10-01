import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import styled from 'styled-components'
import themes from './themes'
import imagePlaceholder from 'assets/icons/imagePlaceholder.svg'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 16px;
`

const Image = styled.img`
  width: 15%;
  height: 25%;
`

export default () => (
  <ComponentThemeProvider themes={themes}>
    <Container>
      <Image src={imagePlaceholder} alt="placeholder" />
    </Container>
  </ComponentThemeProvider>
)
