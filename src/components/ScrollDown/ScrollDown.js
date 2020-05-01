import React from "react";
import { bool, string } from "prop-types";
import classNames from "classnames";

const propsTypes = {
  /** Add you own class */
  className: string,
  /** Seondary position */
  secondary: bool,
};

const ScrollDown = ({ className, secondary }) => {
  const componentClassNames = classNames("fc-scroll-down", className, {
    "fc-scroll-down--position ": secondary === true,
  });

  return <div className={componentClassNames}></div>;
};

ScrollDown.propTypes = propsTypes;

export default ScrollDown;
