import styled from 'styled-components'

const ShareText = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-weight: 100;
  color: ${({ theme }) => theme.colors.shareText};
`

export default ShareText
