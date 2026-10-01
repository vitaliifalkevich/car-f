import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundColor};
  padding: 3px 5px;
  display: flex;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  margin-right: -13px;
  ${media.mobile`
    margin-right: 0;
    padding: 5px;
    border-radius:50%;
  `}
`

export default Container
