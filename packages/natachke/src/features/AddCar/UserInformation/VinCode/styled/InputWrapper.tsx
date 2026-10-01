import styled from 'styled-components'

const InputWrapper = styled.div`
  margin: 20px auto 27px;
  input {
    border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
    text-align: center;
  }
`

export default InputWrapper
