import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  max-width: 500px;
  form {
    width: 100%;
    max-width: 400px;
  }
}
  ${media.mobile`
    margin: 20px auto;
  `}
`

export default Container
