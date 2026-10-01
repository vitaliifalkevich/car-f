import styled from 'styled-components'

const SwitchLabel = styled.label`
  display: flex;
  cursor: pointer;
  width: 37px;
  height: 17px;
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + div {
    background: ${({ theme }) => theme.colors.trackLineActive};
    & > div {
      transform: translate3d(18px, 0, 0);
      background: ${({ theme }) => theme.colors.activeIconColor};
    }
  }
`

export default SwitchLabel
