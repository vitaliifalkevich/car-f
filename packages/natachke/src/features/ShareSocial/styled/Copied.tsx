import styled from 'styled-components'

const Copied = styled.div`
  font-size: 11.5px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.copiedBackground};
  border-radius: 4px;
  padding: 1px 8px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  min-width: 95px;
  display: flex;
  justify-content: center;
  bottom: -17px;
`

export default Copied
