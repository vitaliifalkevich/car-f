import styled, { css } from 'styled-components'
import remove from 'assets/icons/remove.svg'
import removeGrey from 'assets/icons/removeGrey.svg'

const leftLabel = css`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
`

const InputWrapper = styled.div<{ alignLabel: 'top' | 'left' }>`
  text-align: left;
  ${({ alignLabel }) => alignLabel === 'left' && leftLabel};
  .react-select__value-container {
    padding: 0;
  }
  .react-select__indicator.react-select__clear-indicator {
    padding: 0;
  }
  .react-select__clear-indicator {
    &:before {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      background: url(${removeGrey}) center center no-repeat;
    }
    svg {
      display: none;
    }
  }
  .react-select__multi-value {
    background: ${({ theme }) => theme.colors.multiSelectLabelBackground};
    color: ${({ theme }) => theme.colors.multiSelectLabelColor};
    border-radius: 5.69px;
    margin: 0;
    height: 25px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    &__label {
      color: ${({ theme }) => theme.colors.multiSelectLabelColor};
    }
    &__remove {
      height: 100%;
      border-radius: 0 5.69px 5.69px 0;
      transition: 0.5s background;
      &:hover,
      &:active,
      &:focus {
        background-color: ${({ theme }) =>
          theme.colors.multiSelectLabelRemoveBG};
        color: ${({ theme }) => theme.colors.multiSelectLabelColor};
      }
      &:before {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        background: url(${remove}) center center no-repeat;
      }
      svg {
        display: none;
      }
    }
  }
`

export default InputWrapper
