import React from 'react'
import styled from 'styled-components'
import { components } from 'react-select'

const Container = styled.div<{ withIcon: boolean }>`
  display: grid;
  grid-template-columns: ${({ withIcon }) =>
    withIcon ? '31px 5px auto' : 'auto'};
  grid-gap: 6px;
  align-items: center;
  text-align: left;
`

const Icon = styled.img`
  width: 25px;
  height: 21px;
  object-fit: contain;
`

const Line = styled.div`
  height: 27px;
  width: 1px;
  background: ${({ theme }) => theme.colors.lineColor};
`

const Option = props => (
  <components.Option {...props}>
    <Container withIcon={props.data?.icon}>
      {props.data?.icon && (
        <>
          <Icon src={props.data.icon} alt={props.data.label} />
          <Line />
        </>
      )}

      {props.data.label}
    </Container>
  </components.Option>
)

export default Option
