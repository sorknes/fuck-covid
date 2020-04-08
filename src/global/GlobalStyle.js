import { createGlobalStyle } from "styled-components"

import { GlobalBody } from "./styles/body.globalstyle"

export const GlobalStyle = createGlobalStyle`
  /** Body */
  ${GlobalBody}
`
