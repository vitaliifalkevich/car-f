import styled from 'styled-components'
import { media } from 'styles/media'

const Content = styled.div`
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  label {
    font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  }
  ${media.mobile`
    margin-top: 0;
    padding: 0 22px;
    margin-bottom: 20px;
  `}
`

export default Content
