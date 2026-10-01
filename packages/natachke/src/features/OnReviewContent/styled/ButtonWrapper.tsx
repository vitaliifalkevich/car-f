import styled from 'styled-components'

const ButtonWrapper = styled.div`
  button {
    width: 270px;
    margin-top: 20px;
  }
  a {
    color: ${({ theme }) => theme.colors.linkColor};
  }
`

export default ButtonWrapper
