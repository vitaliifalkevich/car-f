import styled from 'styled-components'

const ActionIcon = styled.img<{ isCollapsed?: boolean }>`
  width: 15px;
  height: 15px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 5px;
  transform: ${({ isCollapsed }) =>
    !isCollapsed ? 'rotate(180deg)' : 'rotate(0)'};
`

export default ActionIcon
