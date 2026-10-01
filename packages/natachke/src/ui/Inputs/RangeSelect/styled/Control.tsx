import React from 'react'
import styled from 'styled-components'
import { components } from 'react-select'

const Container = styled.div<{ withIcon: boolean }>`
  display: grid;
  grid-template-columns: ${({ withIcon }) => (withIcon ? '31px 5px' : 'auto')};
  grid-gap: 10px;
  align-items: center;
  text-align: left;
`

const Icon = styled.img`
  width: 25px;
  height: 21px;
  object-fit: contain;
  margin-left: 5px;
`

const Line = styled.div`
  height: 27px;
  width: 1px;
  background: ${({ theme }) => theme.colors.lineColor};
`

const Control = props => {
  const { getValue } = props
  const data = getValue()
  const image = data[0]?.icon

  return (
    <components.Control {...props}>
      <Container withIcon={!!image}>
        {image && (
          <>
            <Icon src={image} alt={image} />
            <Line />
          </>
        )}
      </Container>
      {props.children}
    </components.Control>
  )
}

export default Control
