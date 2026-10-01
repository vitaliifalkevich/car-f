import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 9px 15px;
  cursor: pointer;
  margin: 3px 0;
  &:hover {
    background: ${({ theme }) => theme.colors.itemHoverBackground};
  }
`

export default Item
