import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'

const globalDark = css`
  body {
  }
  ::-webkit-scrollbar {
    background-color: #eeeded;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #acadb2;
  }
  a {
    color: #003760;
  }
`

const globalLight = css`
  body {
  }
  #root {
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    background-color: #eeeded;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #acadb2;
  }
  a {
    color: #003760;
  }
`

export const GlobalStyle = createGlobalStyle`
  html,
  body {}
    a {
    text-decoration: none;
  }
  body {
    padding: 0;
    scrollbar-width: 3;
    }

  *:focus {
    outline: none;
  }

  ul {
    list-style: none;
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 10px;
    // height: 3px;
  }

  ::-webkit-scrollbar-button {
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-track-piece {
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
  }
  &::placeholder {
    color: #898686;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #898686;
  }
  &::-ms-input-placeholder {
    color: #898686;
  }
  .react-select__placeholder {
    color: #898686!important;
  }
  
  @media all and (display-mode: standalone) {
    .app-install-btn {
      display: none;
    }
  }

  ${p => (p.theme.mode === 'dark' ? globalDark : globalLight)}
`
