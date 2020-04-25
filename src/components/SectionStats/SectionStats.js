import React from "react";
import PropTypes from "prop-types";

import Section from "../Section/Section";

const SectionStats = props => {
  const { id, stats } = props;

  return (
    <Section id={id}>
      <div className="fc-section__content">
        <h1 className="fc-section__title">{stats}</h1>
      </div>
    </Section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SectionStats;
