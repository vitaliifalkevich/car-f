import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 16.25px;
  padding: 21px;
  max-width: 568px;
  ${media.tablet`
    max-width: 100%;
    form {
      max-width: 750px;
      margin: 0 auto;
    }
  `}
  ${media.mobile`
    max-width: 100%;
    border-radius: 0;
    padding: 12px 15px;
  `}
`

export default Container
