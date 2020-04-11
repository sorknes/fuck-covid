import { css } from "styled-components";

// Tokens
import { token } from "../../utils/tokens/index";

// Background image
import background from "../../images/middle-finger.svg";

// Load PT Sans typeface
require("typeface-pt-sans");
require("typeface-playfair-display");

export const GlobalBody = css`
  body {
    padding: 0;
    margin: 0;
    color: ${token.color.neutral.TINT_90};
    font-family: "Playfair Display", "Times New Roman", Times, serif;
    background-color: ${token.color.neutral.TINT_0};
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 125% 125%;
    background-attachment: fixed;
    background-position: 200% center;
  }
`;
