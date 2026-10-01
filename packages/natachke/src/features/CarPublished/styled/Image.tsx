import React from 'react'
import { media } from 'styles/media'
import styled from 'styled-components'
import successPublished from 'assets/img/successPublished.png'

const Image = styled.img`
  ${media.tablet`
    width: 300px;
`}
  ${media.mobile`
    width: 300px;
`}
`

export default () => <Image src={successPublished} alt="success published" />
