import styled, { css } from 'styled-components'
import { media } from 'styles/media'

const topSearchCarStyles = css`
  border: 2px solid ${({ theme }) => theme.colors.topSearchBorder};
  padding: 10px;
`

const Container = styled.div<{ isTopSearchCar?: boolean }>`
  border: 2px solid transparent;
  ${({ isTopSearchCar }) => isTopSearchCar && topSearchCarStyles}
  border-radius: 24px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 300px minmax(0, 1fr);
  margin-bottom: 30px;
  ${media.tablet`
    grid-gap: 21px;
    grid-template-columns: 200px minmax(0, 1fr);
    margin-bottom: 0;
    border-radius: 20px;
  `}
  ${media.mobile`
    grid-gap: 12px;
    grid-template-columns: 130px minmax(0, 1fr);
    margin-bottom: 0;
  `}
`

export default Container
