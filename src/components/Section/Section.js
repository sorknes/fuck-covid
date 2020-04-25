import React from "react";
import PropTypes from "prop-types";

const Section = props => {
  const { children, id } = props;

  return (
    <section className="fc-section" id={id}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
