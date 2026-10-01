import ReactSelect from 'react-select'
import styled from 'styled-components'

const Select = styled(ReactSelect)`
  .react-select__control {
    background-color: ${({ theme }) => theme.colors.inputSelectBackgroundColor};
    border: 1.5px solid
      ${props => props.theme.colors.inputSelectBackgroundColor};
    border-radius: 10px;
    font-size: 14px;
    box-shadow: none;
    font-family: ${props => props.theme.fonts.ralewayRegular};
    padding: 0 5px;
    min-height: 42px;
    cursor: pointer;

    &:hover {
      border: 1.5px solid transparent;
      background: ${props => props.theme.colors.inputSelectBackgroundColor};
    }

    &:focus,
    &:active {
      background: ${props => props.theme.colors.selectBackgroundActive};
    }

    &--menu-is-open {
      .react-select__dropdown-indicator {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }

  .react-select__indicator {
    padding: 0 8px;
  }

  .react-select__placeholder {
    color: ${props => props.theme.colors.titleColor};
    font-family: ${props => props.theme.fonts.ralewayRegular};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    svg {
      color: ${props => props.theme.colors.titleColor};
      width: 15px;
    }
  }

  .react-select__single-value {
    color: ${props => props.theme.colors.chosenValueColor};
  }

  .react-select__menu {
    background: ${props => props.theme.colors.selectMenuBackground};
    font-size: 14px;
    color: ${props => props.theme.colors.titleColor};
    font-family: ${props => props.theme.fonts.ralewayRegular};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    border-radius: 10px;
    margin-top: 10px;
    .react-select__group {
      padding-bottom: 0;
    }
    & > div {
      padding-top: 0;
      padding-bottom: 0;
      border-radius: 10px;
    }
  }
  .react-select__value-container {
    padding: 2px 3px;
  }
  .react-select__option {
    background: ${props => props.theme.colors.selectMenuBackground};
    color: ${props => props.theme.colors.chosenValueColor};
    padding: 8px 10px;
    cursor: pointer;
    &--is-focused {
      color: ${props => props.theme.colors.selectMenuHoverColor};
      background: ${props => props.theme.colors.selectMenuHoverBackground};
      &:active,
      &:focus {
        background: ${props => props.theme.colors.selectMenuHoverBackground};
        color: ${props => props.theme.colors.selectMenuHoverColor};
      }
    }
  }
`

export default Select
