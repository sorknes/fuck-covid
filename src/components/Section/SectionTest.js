import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const SectionTest = ({ description, title, ...style }) => {
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
          style={{ ...style, y }}
          animate={{
            width: ["0%", "75%"],
            opacity: [0, 1],
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
        />
        <motion.div
          animate={{
            y: [200, 0],
            opacity: [0, 1],
          }}>
          <h2>2.324.476</h2>
        </motion.div>
      </div>

      {/* <div
        ref={ref}
        style={{
          width: "100%",
          height: "100vh",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          position: "relative",
          backgroundColor: "peru",
        }}>
        <motion.div
          className="overlay-yellow"
          style={{ ...style, y }}
          animate={{
            width: ["0%", "20%"],
            opacity: [0, 1],
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
        />
        <motion.div
          className="overlay-red"
          style={{ ...style, y }}
          animate={{
            width: ["0%", "10%"],
            opacity: [0, 1],
            transition: {
              duration: 0.5,
              delay: 0.75,
            },
          }}
        />
        <motion.div
          animate={{
            y: [200, 0],
            opacity: [0, 1],
          }}>
          <h2>2.324.476</h2>
        </motion.div>
      </div> */}

      {/* <div ref={ref}>
        <motion.div
          className="overlay-yellow"
          style={{ ...style, y }}
          animate={{
            width: ["0%", "20%"],
            opacity: [0, 1],
            transition: {
              delay: 1,
            },
          }}
        />

        <motion.div
          className="overlay-red"
          style={{ ...style, y }}
          animate={{
            width: ["0%", "20%"],
            opacity: [0, 1],
            transition: {
              delay: 1,
            },
          }}
        />

        <motion.div
          animate={{
            y: [200, 0],
            opacity: [0, 1],
          }}>
          <h2>{title}</h2>
        </motion.div>

        <motion.div
          animate={{
            y: [200, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.5,
            },
          }}>
          <p>{description}</p>
        </motion.div>
      </div> */}
    </>
  );
};

SectionTest.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTest;
