import { createGlobalStyle } from "styled-components";

import { GlobalBody } from "./styles/body.globalstyle";
import { GlobalLink } from "./styles/link.globalstyle";

export const GlobalStyle = createGlobalStyle`
  /** Body */
  ${GlobalBody}

  /** Link */
  ${GlobalLink}
`;
