import styled from 'styled-components'

const Icon = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  transition: 0.3s transform;
  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
  }
`

export default Icon
