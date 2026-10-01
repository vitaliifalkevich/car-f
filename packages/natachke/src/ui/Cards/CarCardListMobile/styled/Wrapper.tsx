import styled, { css } from 'styled-components'

const topSearchCarStyles = css`
  border: 2px solid ${({ theme }) => theme.colors.topSearchBorder};
  padding: 8px;
  border-radius: 12px;
`

const Wrapper = styled.div<{ isTopSearchCar?: boolean }>`
  margin: 15px 0;
  border: 2px solid transparent;
  ${({ isTopSearchCar }) => isTopSearchCar && topSearchCarStyles}
`

export default Wrapper
