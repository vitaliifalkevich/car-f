import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  z-index: 999999;
  grid-gap: 12px;
  padding: 8px 12px;

  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  ${media.mobile`
    padding: 12px 12px;
    flex-direction: column;
    align-items: center;
    grid-gap: 8px;
  `}

  button {
    min-width: 120px;
  }
`

export default Container
