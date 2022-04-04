import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    text-align: left;
    border: 0;
    color: #23292e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    font-family: "Inter", sans-serif;
}

button {
    background: transparent;
    cursor: pointer;
}

html {
    font-size: 62.5%;
}

img {
    display: block;
    max-width: 100%;
}

html,
body {
    overflow-x: hidden;
}

input,
button,
textarea {
    appearance: none;
}

.container{
  width: 100%;
  max-width: 1246px;
  padding: 0 1.5rem;
  margin: 0 auto;
}
`;
