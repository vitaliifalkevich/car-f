import styled from 'styled-components'

const Phone = styled.div`
  font-size: 21px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.phoneColor};
`

export default Phone
