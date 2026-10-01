import styled from 'styled-components'

const Title = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 15px;
`

export default Title
