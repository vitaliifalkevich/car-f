import React from 'react'
import styled from 'styled-components'
import location from 'assets/icons/location-outlined.svg'
import Text from './Text'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 35px;
`
const LocationIcon = styled.img`
  margin-right: 4px;
`

export default ({ city }) => (
  <Container>
    <LocationIcon src={location} alt="location" />
    <Text>{city}</Text>
  </Container>
)
