import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  row-gap: 9px;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  align-items: center;
  & > div:nth-child(odd) {
    border-radius: 8.12px 0 0 8.12px;
  }
  & > div:nth-child(even) {
    border-radius: 0 8.12px 8.12px 0;
  }

  & > div:not(:nth-child(even)) {
    &:after {
      right: 0;
    }
  }
  & > div:not(:nth-child(odd)) {
    &:before {
      content: '';
      position: absolute;
      left: -1px;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.border};
      z-index: 1;
    }
  }

  & > div:nth-child(even)[class*='active-button'] {
    &:before {
      display: none;
    }
  }

  & > div[class*='active-button'] + div {
    &:before {
      display: none;
    }
  }
`

export default Container
