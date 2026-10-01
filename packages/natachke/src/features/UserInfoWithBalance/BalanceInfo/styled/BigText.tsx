import styled from 'styled-components'
import Text from './Text'
import { media } from 'styles/media'

const BigText = styled(Text)`
  font-size: 16px;
  line-height: 19px;

  ${media.mobile`
    font-size: 14px;
    line-height: 16px;
  `}
`

export default BigText
