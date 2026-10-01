import styled from 'styled-components'

const Value = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export default Value
