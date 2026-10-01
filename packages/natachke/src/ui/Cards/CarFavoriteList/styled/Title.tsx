import styled from 'styled-components'

const Title = styled.div`
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.carTitle};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    text-decoration: underline;
  }
`

export default Title
