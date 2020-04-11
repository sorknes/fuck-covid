import PropTypes from "prop-types";
import React from "react";

import { Styled } from "./Header.style";

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.HeaderTitle>
      <div>{siteTitle}</div>
    </Styled.HeaderTitle>
  </Styled.Header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
