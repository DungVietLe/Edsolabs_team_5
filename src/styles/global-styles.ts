import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,::before,::after{
      padding: 0;
      margin: 0;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }
  html{
    font-size: 16px;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #45484f;
    width: 0;
    height: 25%;
  }
  ::-webkit-scrollbar-track {
    width: 12px;
    background: #2f3543;
    border-left: 0 solid #fff;
    border-right: 0 solid #fff;
  }

  body {
  font-family: 'Montserrat', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select,a, span, button,p {
    font-family: 'Montserrat' !important;
   
  }
  .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper{
    background-color:#2f3543!important;
    max-width:250px !important;
    width:75vw !important;
    li{
      color: #fff;
    }
  }
`;
