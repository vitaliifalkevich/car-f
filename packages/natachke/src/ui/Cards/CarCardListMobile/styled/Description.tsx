import styled from 'styled-components'

const Description = styled.div`
  font-size: 14px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  flex: 9 1;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default Description
