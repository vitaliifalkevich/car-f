import styled from 'styled-components'
import Text from './Text'

const UserName = styled(Text)`
  font-size: 14px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
`

export default UserName
