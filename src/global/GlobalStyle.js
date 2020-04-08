import { createGlobalStyle } from "styled-components";

import { GlobalBody } from "./styles/body.globalstyle";
import { GlobalLink } from "./styles/link.globalstyle";
import { GlobalTypography } from "./styles/typography.globalstyle";

export const GlobalStyle = createGlobalStyle`
  /** Body */
  ${GlobalBody}

  /** Link */
  ${GlobalLink}

  /** Typography */
  ${GlobalTypography}
`;
