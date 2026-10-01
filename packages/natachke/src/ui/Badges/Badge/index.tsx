import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'
import { media } from 'styles/media'
import ReactTooltip from 'react-tooltip'

export interface IBadge {
  size: 'lg' | 'md' | 'sm'
  tooltip?: string
}
const Container = styled.div<IBadge>`
  background: ${({ theme }) => theme.colors.backgroundColor};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '23px'
      case 'md':
        return '43px'
      default:
        return '50px'
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '23px'
      case 'md':
        return '43px'
      default:
        return '50px'
    }
  }};
  ${media.tablet`
   width: ${({ size }) => {
     switch (size) {
       case 'sm':
         return '23px'
       case 'md':
         return '28px'
       default:
         return '37px'
     }
   }};
  height: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '23px'
      case 'md':
        return '28px'
      default:
        return '37px'
    }
  }};
  `}
  ${media.mobile`
   width: ${({ size }) => {
     switch (size) {
       default:
         return '22px'
     }
   }};
  height: ${({ size }) => {
    switch (size) {
      default:
        return '22px'
    }
  }};
  `}
`

const Image = styled.img`
  width: 48%;
  height: 48%;
  display: block;
`

const TooltipText = styled.span`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  color: ${({ theme }) => theme.colors.tooltipTextColor};
`

interface IBadgeProps extends IBadge {
  icon: string
  tooltip?: string
  tooltipId?: string
}

export default (props: IBadgeProps) => (
  <ComponentThemeProvider themes={themes}>
    <Container {...props} data-for={props.tooltipId} data-tip={props.tooltip}>
      <Image src={props.icon} alt="badge" />
      {props.tooltip && (
        <ReactTooltip
          id={props.tooltipId}
          place="right"
          backgroundColor="#EEEDED"
        >
          <TooltipText>{props.tooltip}</TooltipText>
        </ReactTooltip>
      )}
    </Container>
  </ComponentThemeProvider>
)
