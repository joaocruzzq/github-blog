import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
   
      box-sizing: border-box;
   }

   body {
      color: ${props => props.theme["base-text"]};
      background: ${props => props.theme["base-background"]};
   }

   body, input, text-area, button {
      line-height: 160%;
      font: 400 1rem Nunito, sans-serif;
   }
`