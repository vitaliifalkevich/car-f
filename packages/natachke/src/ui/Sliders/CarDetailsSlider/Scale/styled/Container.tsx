import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8.57px;
  padding: 0 12px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  position: absolute;
  bottom: 27px;
  right: 16px;
  height: 33px;
  cursor: pointer;
  & {
    img {
      transition: 0.3s transform;
    }
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  ${media.tablet`
    height: 28px;
    padding: 0 9px;
  `}
  ${media.mobile`
    height: 28px;
    padding: 0 9px;
  `}
`

export default Container
