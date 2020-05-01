/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

// Global style
import "../../styles/scss/fc-main.scss";

import Header from "../Header/Header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      speed: 1000,
      easing: "easeInOutCubic",
    });
  }

  return (
    <>
      {isLoaded ? (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="main">{children}</main>
          {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
          {/* </div> */}
        </>
      ) : (
        <div className="fc-preloader"></div>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
