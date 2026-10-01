import styled from 'styled-components'

const Text = styled.div<{ isAction?: boolean; isNotActive?: boolean }>`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 13px;
  line-height: 15px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  text-decoration: ${({ isAction, isNotActive }) =>
    isNotActive ? 'none' : isAction ? 'underline' : 'none'};

  &:hover {
    text-decoration: none;
  }
  cursor: ${({ isAction, isNotActive }) =>
    isNotActive ? 'default' : isAction ? 'pointer' : 'default'};
`

export default Text
