import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

import ScrollDown from "../ScrollDown/ScrollDown";
import Section from "../Section/Section";

const SectionStats = props => {
  const { id, left, stats, top, width } = props;

  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <Section id={id}>
      <ScrollDown />

      <div className="fc-section__container" ref={ref}>
        <motion.div
          className="fc-overlay"
          style={{ y: y1, width: width, top: top, left: left }}
        />
        <h1 className="fc-section__title">{stats}</h1>
      </div>
    </Section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SectionStats;
