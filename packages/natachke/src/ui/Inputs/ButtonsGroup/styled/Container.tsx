import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div<{ withIcon: boolean }>`
  height: 33px;
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8.12px;

  & > div:not(:last-child) {
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.border};
      z-index: 1;
    }
    &:after {
      right: 0;
    }
  }
  ${media.mobile`
    height: ${({ withIcon }) => (withIcon ? '55px' : '33px')}
  `}
`

export default Container
