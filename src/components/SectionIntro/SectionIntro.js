import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import Section from "../Section/Section";

const SectionIntro = () => {
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
    <Section id="intro">
      <div className="fc-section__content" ref={ref}>
        <motion.div
          className="fc-grid-lines"
          animate={{ height: ["0vh", "100vh"] }}
          transition={{
            delay: 1,
          }}></motion.div>
        <motion.div
          className="overlay-yellow"
          style={{ y: y1 }}
          animate={{
            width: ["0%", "37.5%"],
            opacity: [0, 1],
          }}
        />
        <h1 className="fc-section__title">
          <motion.span
            className="fc-section__block"
            animate={{
              y: [-400, 0],
            }}>
            Fuck
          </motion.span>
          <motion.span
            className="fc-section__block"
            animate={{
              y: [400, 0],
              opacity: [0, 1],
            }}>
            <motion.span
              className="fc-section__block"
              style={{ y: y2, marginLeft: "3vw" }}>
              Covid
            </motion.span>
          </motion.span>
        </h1>
      </div>
    </Section>
  );
};

export default SectionIntro;
