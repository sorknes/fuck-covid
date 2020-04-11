import { css } from "styled-components";

import { mediaMin } from "../../utils/mixins/mixMediaQuery";

export const GlobalTypography = css`
  h1 {
    margin: 0;
    font-size: 16vw;
    font-family: "PT Sans", Arial, Helvetica, sans-serif;
    line-height: 1;
  }

  p {
    font-size: 1.5rem;

    ${mediaMin.WIDTH_2} {
      font-size: 2rem;
    }

    ${mediaMin.WIDTH_3} {
      font-size: 3rem;
    }
  }
`;
