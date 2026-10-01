import React from 'react'
import styled from 'styled-components'
import checkSuccess from 'assets/icons/checkSuccess.svg'
import { media } from 'styles/media'

const CheckSuccessIcon = styled.img`
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translate(0, -50%);
  ${media.tablet`
    top: 70%;
  `}
  ${media.mobile`
    position: initial;
    display: inline-block;
    top: 0;
    margin-top: 7px;
    margin-left: 5px;
  `}
`

export default () => (
  <CheckSuccessIcon className="success-icon" src={checkSuccess} alt="success" />
)
