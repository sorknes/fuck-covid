import { css } from "styled-components";

// Tokens
import { token } from "../../utils/tokens/index";

// Load PT Sans typeface
require("typeface-pt-sans");

export const GlobalBody = css`
  body {
    padding: 0;
    margin: 0;
    color: ${token.color.neutral.TINT_90};
    font-family: "PT Sans", Arial, Helvetica, sans-serif;
    background-color: ${token.color.neutral.TINT_0};
  }
`;
