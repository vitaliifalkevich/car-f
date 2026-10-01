import styled from 'styled-components'
import checkboxActive from 'assets/icons/checkboxActive.svg'

const Label = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  input[type='checkbox'] {
    display: none;
  }

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    border: 2px solid ${({ theme }) => theme.colors.defaultColor};
  }

  input[type='checkbox']:checked + span {
    background: ${({ theme }) => theme.colors.checkedColor};
    border: 2px solid ${({ theme }) => theme.colors.checkedColor};
    background: url(${checkboxActive}) center center no-repeat;
  }
`

export default Label
