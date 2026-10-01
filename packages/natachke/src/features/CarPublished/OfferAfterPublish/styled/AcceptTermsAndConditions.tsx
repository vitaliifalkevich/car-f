import styled from 'styled-components'

const AcceptTermsAndConditions = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 12px;
  a {
    font-size: 12px;
    line-height: 14px;
  }
`

export default AcceptTermsAndConditions
