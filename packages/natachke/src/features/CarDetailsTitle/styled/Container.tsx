import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  min-height: 42px;
  margin-top: 22px;
  padding-bottom: 12.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
  & > div {
    display: flex;
    align-items: center;
    grid-gap: 12px;
  }
  ${media.mobile`
    padding-bottom: 12px;
  `}
`

export default Container
