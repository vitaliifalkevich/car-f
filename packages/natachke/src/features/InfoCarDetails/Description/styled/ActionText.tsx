import styled from 'styled-components'

const ActionText = styled.div<{ directionIcon: 'left' | 'right' }>`
  font-size: 14px;
  line-height: 16px;
  ${({ directionIcon }) =>
    directionIcon === 'left' ? `margin-left: 10px` : 'margin-right: 10px'};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
`

export default ActionText
