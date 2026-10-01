import styled from 'styled-components'
import Text from './Text'
import { media } from 'styles/media'

const Region = styled(Text)`
  margin-top: 3px;
  margin-bottom: 7px;

  ${media.tablet`
    margin-bottom: 0;
  `}
`

export default Region
