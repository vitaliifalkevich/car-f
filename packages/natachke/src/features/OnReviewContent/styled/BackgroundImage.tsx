import React from 'react'
import styled from 'styled-components'
import background404 from 'assets/img/404background.png'

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 100%;
`

export default () => <BackgroundImage src={background404} />
