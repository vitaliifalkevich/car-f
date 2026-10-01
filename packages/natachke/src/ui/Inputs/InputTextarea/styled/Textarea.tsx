import styled from 'styled-components'

const Textarea = styled.textarea`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  padding: 13px;
  width: 100%;
  border: none;
  margin-top: 3px;
`

export default Textarea
