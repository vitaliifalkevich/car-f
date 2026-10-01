import styled from 'styled-components'

const Item = styled.div<{
  active: boolean
  value: string | number | boolean
  itemWidth: number
}>`
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 15px;
  line-height: 18px;
  flex: ${({ itemWidth }) => `1 1 ${itemWidth}%`};
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};

  &:after {
    content: '${({ value }) => `${value}`}';
    position: absolute;
    opacity: ${({ active }) => (active ? 1 : 0)};
    top: 3px;
    bottom: 3px;
    right: 3px;
    left: 3px;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    background-color: ${({ theme }) => theme.colors.activeBackground};
    font-family: ${({ theme }) => theme.fonts.ralewayBold};
    color: ${({ theme }) => theme.colors.activeText};
    z-index: 2;
    border-radius: 5.69px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    &:after {
      background-color: ${({ theme }) => theme.colors.activeBackground};
      opacity: 1;
      transition: 0.3s all;
    }
  }
`

export default Item
