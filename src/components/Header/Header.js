// import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Scrollspy from "react-scrollspy";

// import { Navigation } from "../Navigation/Navigation";
// import { NavigationListGroup } from "../Navigation/NavigationListGroup";

const Header = ({ siteTitle }) => (
  <header className="fc-header">
    <nav className="fc-nav">
      <Scrollspy
        className="fc-nav__list-group"
        currentClassName="fc-nav__list-link--current"
        items={["intro", "infected", "deaths"]}>
        <li className="fc-nav__list-item">
          <a className="fc-nav__list-link" href="#intro">
            Home
          </a>
        </li>
        <li className="fc-nav__list-item">
          <a className="fc-nav__list-link" href="#infected">
            Infected
          </a>
        </li>
        <li className="fc-nav__list-item">
          <a className="fc-nav__list-link" href="#deaths">
            Deaths
          </a>
        </li>
      </Scrollspy>
    </nav>

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
