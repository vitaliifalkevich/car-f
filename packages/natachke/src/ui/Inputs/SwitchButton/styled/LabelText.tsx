import styled from 'styled-components'

const LabelText = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.textColor};
`

export default LabelText
