import React from "react";

import { Styled } from "./ButtonLink.style";

const ButtonLink = props => {
  const { children, to } = props;

  return <Styled.ButtonLink to={to}>{children}</Styled.ButtonLink>;
};

export default ButtonLink;
