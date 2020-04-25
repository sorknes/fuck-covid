import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const Section = ({ description, title, ...style }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  const y2 = useTransform(scrollY, [elementTop, elementTop + 5], [0, -1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <>
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}>
        <motion.div
          className="overlay-yellow"
          style={{ y: y1 }}
          animate={{
            width: ["0%", "37.5%"],
            opacity: [0, 1],
          }}
        />
        <motion.div
          animate={{
            y: [-400, 0],
            // opacity: [0, 1],
          }}>
          <h2>Fuck</h2>
        </motion.div>
        <motion.div
          animate={{
            y: [400, 0],
            opacity: [0, 1],
          }}>
          <motion.h2 style={{ y: y2, marginLeft: "3vw" }}>Covid</motion.h2>
        </motion.div>
      </div>
    </>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
