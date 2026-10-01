import React from 'react'
import { media } from 'styles/media'
import styled from 'styled-components'
import { SecondaryText } from 'ui/Text'
import denied from 'assets/icons/denied.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 6px 0;
    display: grid;
    grid-template-columns: 20px auto;
    grid-gap: 5px;
    align-items: center;
  }
  ${media.mobile`
    p {
      align-items: flex-start;
    }
  `}
`
const Icon = styled.img`
  margin-right: 10px;
  height: 20px;
`

export default ({ children }) => {
  return (
    <Container>
      <SecondaryText>
        <Icon src={denied} alt="denied " />
        {children}
      </SecondaryText>
    </Container>
  )
}
