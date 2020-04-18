import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const Section = ({ description, title, ...style }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div ref={ref}>
      <motion.div
        className="overlay"
        style={{ ...style, y }}
        animate={{
          width: ["0%", "20%"],
          opacity: [0, 1],
          transition: {
            delay: 0.5,
          },
        }}
      />
      <motion.div
        animate={{
          y: [200, 0],
          opacity: [0, 1],
        }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
