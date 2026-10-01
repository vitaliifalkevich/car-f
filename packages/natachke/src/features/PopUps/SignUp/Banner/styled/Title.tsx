import styled from 'styled-components'

const Title = styled.div`
  font-size: 70px;
  line-height: 82px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default Title
