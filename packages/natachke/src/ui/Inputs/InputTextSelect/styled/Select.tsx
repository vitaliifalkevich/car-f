import ReactSelect from 'react-select'
import styled from 'styled-components'
import { media } from 'styles/media'

const Select = styled(ReactSelect)`
  .react-select__control {
    background-color: transparent;
    border: none;
    font-size: 14px;
    box-shadow: none;
    color: ${props => props.theme.colors.titleColor};
    font-family: ${props => props.theme.fonts.ralewayBold};
    padding: 0 5px;
    min-height: 40px;
    cursor: pointer;
    font-size: 16px;
    line-height: 19px;

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
    color: ${props => props.theme.colors.titleColor};
    border-bottom: 1px solid ${props => props.theme.colors.titleColor};
  }

  .react-select__menu {
    background: ${props => props.theme.colors.selectMenuBackground};
    font-size: 14px;
    color: ${props => props.theme.colors.titleColor};
    font-family: ${props => props.theme.fonts.ralewayRegular};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    text-align: center;
    border-radius: 10px;
    margin-top: 10px;
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
    color: ${props => props.theme.colors.titleColor};
    padding: 8px 10px;
    cursor: pointer;
    &--is-focused {
      background: ${props => props.theme.colors.selectMenuHoverBackground};
      &:active,
      &:focus {
        background: ${props => props.theme.colors.selectMenuHoverBackground};
      }
    }
  }
  ${media.mobile`
   .react-select__single-value {
    font-size: 14px;
    line-height: 14px;
  }
  .react-select__control {
    padding: 0 2px;
  }
  .react-select__value-container {
    padding: 2px 0px;
  }
  
  `}
`

export default Select
