"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1,  transition: { duration: 1 } },
  hidden: { opacity: 0,  },
};

const FadeInBox = ({styles, children}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      animate={controls}
      ref={ref}
      className={styles}
    >
      {children}
    </motion.div>
  );
};

export default FadeInBox;
