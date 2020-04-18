// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

// import { Navigation } from "../Navigation/Navigation";
// import { NavigationListGroup } from "../Navigation/NavigationListGroup";

const Header = ({ siteTitle }) => (
  <header className="fc-header">
    {/* <div className="fc-header__logo">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div> */}

    {/* <Navigation><NavigationListGroup /></Navigation> */}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
