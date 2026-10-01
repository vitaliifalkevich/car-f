import eye from 'assets/icons/eye.svg'
import closeEye from 'assets/icons/closeEye.svg'
import styled, { css } from 'styled-components'
import { HelperButton } from '../../types'

const EyeType = css<HelperButton>`
  background-image: url(${({ state }) =>
    state === 'default' ? eye : closeEye});
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  background-size: 24px;
  top: ${({ state }) => (state === 'default' ? '50%' : '51%')};
`

const HelperButtonContainer = styled.div<HelperButton>`
  right: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ type }) => {
    switch (type) {
      case 'eye':
        return EyeType
      default:
        return null
    }
  }};
`

export default HelperButtonContainer
