import styled from 'styled-components'

const SecondDescription = styled.div`
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  margin-top: 10px;
  margin-left: 30px;
`

export default SecondDescription
