import React from "react";

import { Styled } from "./Section.style";

const Section = props => {
  const { children, ...rest } = props;

  return <Styled.Section {...rest}>{children}</Styled.Section>;
};

export default Section;
