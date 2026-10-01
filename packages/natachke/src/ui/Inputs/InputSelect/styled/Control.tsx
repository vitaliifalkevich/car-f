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
  margin-left: 5px;
`

const Line = styled.div`
  height: 27px;
  width: 1px;
  background: ${({ theme }) => theme.colors.lineColor};
`

const Control = ({ children, ...props }) => {
  const { getValue } = props
  const data = getValue()
  const image = props?.selectProps.fixedIcon
    ? props.selectProps.fixedIcon
    : data[0]?.icon

  return (
    //@ts-ignore
    <components.Control {...props}>
      <Container withIcon={!!image}>
        {image && (
          <>
            <Icon src={image} alt={image} />
            <Line />
          </>
        )}
      </Container>
      {children}
    </components.Control>
  )
}

export default Control
