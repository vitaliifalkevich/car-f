import styled from 'styled-components'

const Text = styled.div`
  color: ${({ theme }) => theme.colors.counterColor};
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  font-size: 14px;
  line-height: 16px;
`

export default Text
