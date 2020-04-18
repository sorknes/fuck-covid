import React from "react";

export const Navigation = props => {
  const { children } = props;

  return <nav className="fc-nav">{children}</nav>;
};
