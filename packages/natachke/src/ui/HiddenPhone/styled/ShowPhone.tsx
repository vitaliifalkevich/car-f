import styled from 'styled-components'

const ShowPhone = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  border-bottom: 1px solid ${({ theme }) => theme.fonts.textColor};
  cursor: pointer;
  width: auto;
  display: inline-block;
  clear: both;
  margin-top: 7px;
  &:hover {
    border-bottom: 1px solid transparent;
  }
`

export default ShowPhone
