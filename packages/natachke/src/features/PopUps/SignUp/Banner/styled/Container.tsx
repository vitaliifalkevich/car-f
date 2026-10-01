import styled from 'styled-components'
import { media } from 'styles/media'
import signUpBanner from 'assets/img/signUpBanner.png'

const Container = styled.div`
  width: 300px;
  height: 420px;
  background: url(${signUpBanner}) center center no-repeat;
  border-radius: 16.25px;
  position: relative;
  ${media.mobile`
    height: 270px;
    background-size: cover;
    width: 100%;
     border-radius: 0;
  `}
`

export default Container
