import styled from 'styled-components'
import { media } from 'styles/media'

const Container = styled.div<{ desktopCount: number; tabletCount: number }>`
  display: grid;
  position: relative;
  gap: 15px;
  grid-template-columns: repeat(
    ${({ desktopCount }) => desktopCount},
    minmax(0, 1fr)
  );
  margin: 0 7.5px;
  ${media.tablet`
   grid-template-columns: repeat(${({ tabletCount }) =>
     tabletCount}, minmax(0, 1fr));
  `}
  ${media.mobile`
   grid-template-columns: repeat(2, minmax(0, 1fr));
   margin: 0 5px;
   gap: 10px;
  `}
`

export default Container
