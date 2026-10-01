import styled from 'styled-components'
import removeGrey from 'assets/icons/removeGrey.svg'

const Container = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
  & > div:first-child > div.react-select__control {
    border-radius: 10px 0 0 10px;
    &:after {
      content: '';
      height: 27px;
      width: 1px;
      background: ${({ theme }) => theme.colors.dividedLineColor};
      margin-right: -5px;
    }
  }
  & > div:last-child > div.react-select__control {
    border-radius: 0 10px 10px 0;
  }

  .react-select__indicator.react-select__clear-indicator {
    padding: 0;
    svg {
      display: none;
    }
    &:before {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      background: url(${removeGrey}) center center no-repeat;
    }
  }
`

export default Container
