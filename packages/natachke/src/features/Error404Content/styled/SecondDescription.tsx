import styled from 'styled-components'

const SecondDescription = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.secondDescription};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
`

export default SecondDescription
