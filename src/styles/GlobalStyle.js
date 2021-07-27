import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 21px;
  }
  #root {
    width: 100%;
    height: 100%;
    font-weight: normal;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
