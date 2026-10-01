import styled from 'styled-components'
import { media } from 'styles/media'
import welcome from 'assets/img/welcome.jpg'
import welcomeBig from 'assets/img/welcomeBig.jpg'

const Container = styled.div`
  background: url(${welcome}) center center no-repeat;
  background-size: cover;
  height: 100%;
  top: 0;
  width: 100%;
  display: grid;
  padding: 22px;
  div {
    color: ${({ theme }) => theme.colors.textColor};
  }
  ${media.mobile`
   background: url(${welcomeBig}) center center no-repeat;
   background-size: auto 112%;
   background-position: -70px -80px;
  
  `}
`

export default Container
