import styled from 'styled-components'

const Description = styled.div<{ withActions?: boolean }>`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  flex: 9 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ withActions }) => (withActions ? '2' : '4')};
  line-clamp: ${({ withActions }) => (withActions ? '2' : '4')};
  -webkit-box-orient: vertical;
`

export default Description
