import styled from 'styled-components'
import { media } from 'styles/media'

const PhoneWrapper = styled.div`
  ${media.tablet`
     margin-top: 6px;
     & > div > div:last-child {
       margin-top: -25px;
     }
`}
  ${media.mobile`
     & > div > div:last-child {
       margin-top: -25px;
     }
`}
`

export default PhoneWrapper
