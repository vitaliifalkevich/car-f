import styled from 'styled-components'

const CopyIcon = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  transition: 0.3s transform;
  transform: rotate(135deg);
  &:hover {
    opacity: 0.8;
    transform: scale(0.95) rotate(135deg);
  }
`

export default CopyIcon
