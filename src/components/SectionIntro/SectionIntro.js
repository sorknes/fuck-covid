import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import Section from "../Section/Section";
import SectionContent from "../SectionContent/SectionContent";

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

  const y3 = useTransform(scrollY, [elementTop, elementTop + 2], [0, -1], {
    clamp: false,
  });

  const opacity = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <Section id="intro">
      <div className="fc-section__container" ref={ref}>
        <motion.div
          className="fc-grid-lines"
          animate={{ height: ["0vh", "100vh"] }}
          transition={{
            delay: 1,
          }}
        />
        <motion.div
          className="fc-overlay fc-overlay--intro"
          style={{ y: y1 }}
          animate={{
            width: ["0%", "40%"],
            opacity: [0, 1],
          }}
        />
        <motion.h1
          className="fc-section__title"
          initial="hidden"
          animate="visible"
          variants={opacity}>
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
            }}>
            <motion.span
              className="fc-section__block"
              style={{ y: y2, marginLeft: "3vw" }}>
              Covid
            </motion.span>
          </motion.span>
        </motion.h1>
        <SectionContent>
          <motion.div
            style={{ y: y3 }}
            initial="hidden"
            animate="visible"
            variants={opacity}
            transition={{
              delay: 0.5,
            }}>
            <p>
              All over the world millions of people are affected by the Covid-19
              virus.
              <br />
              And sometimes, you just want to say;{" "}
              <strong>Fuck you Covid!</strong>
            </p>
          </motion.div>
        </SectionContent>
      </div>
    </Section>
  );
};

export default SectionIntro;
