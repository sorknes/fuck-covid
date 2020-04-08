import { css } from "styled-components"

// Load PT Sans typeface
require("typeface-pt-sans")

export const GlobalBody = css`
  body {
    padding: 0;
    margin: 0;
    color: rgba(255, 255, 255, 0.95);
    font-family: "PT Sans", Arial, Helvetica, sans-serif;
    background-color: rgba(0, 0, 0, 0.95);
  }
`
