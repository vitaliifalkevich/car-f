import styled from 'styled-components'

const Title = styled.div`
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.carTitle};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 9 1;
  &:hover {
    text-decoration: underline;
  }
`

export default Title
