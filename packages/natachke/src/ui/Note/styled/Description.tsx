import styled from 'styled-components'
import Text from './Text'

const Description = styled(Text)<{ isShort: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ isShort }) => (isShort ? '3' : 'initial')};
  line-clamp: ${({ isShort }) => (isShort ? '3' : 'initial')};
  -webkit-box-orient: vertical;
`

export default Description
