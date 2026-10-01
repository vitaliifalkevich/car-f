import styled from 'styled-components'

const OptionTitle = styled.div<{ withIcon?: boolean }>`
  font-size: 15px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.optionTitle};
  display: grid;
  align-items: center;
  grid-template-columns: ${({ withIcon }) => (withIcon ? 'auto 25px' : 'auto')};
`

export default OptionTitle
