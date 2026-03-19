import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: ${({ theme }) => theme.background};
    background-image: url("/washiTexture.png");
    background-size: cover;
    background-attachment: fixed;
    color: ${({ theme }) => theme.text};
    font-family: 'Noto Sans JP', sans-serif;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  

 // Focus ring for accessibility
*:focus-visible {
  outline: 2px solid #D9D4F1;
  outline-offset: 2px;
  border-radius: 6px;
}
`;