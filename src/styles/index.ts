import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  *, body{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
`;
