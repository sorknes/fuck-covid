import { Link } from "gatsby";

import styled from "styled-components";

// Tokens
import { token } from "../../utils/tokens/index";

const ButtonLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  bottom: 7rem;
  transition: color
    ${token.transition.duration.SPEED_3 +
      " " +
      token.transition.timing.EFFECT_3};

  &::before,
  &::after {
    width: 1px;
    margin-left: -0.5px;
    content: "";
    position: absolute;
    left: 50%;
    background-color: ${token.color.neutral.TINT_100};
    transition: height
      ${token.transition.duration.SPEED_3 +
        " " +
        token.transition.timing.EFFECT_3};
  }

  &::before {
    height: 24px;
    top: -32px;
  }

  &::after {
    height: 60px;
    top: 32px;
  }

  &:hover {
    color: ${token.color.neutral.TINT_60};

    &::before {
      height: 64px;
    }

    &::after {
      height: 80px;
    }
  }
`;

export const Styled = {
  ButtonLink,
};
