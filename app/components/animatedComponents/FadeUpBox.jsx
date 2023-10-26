"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const FadeUpBox = ({styles, children, delay, yaxis}) => {
  
const boxVariant = {
  visible: { opacity: 1, y: 0,  transition: { duration: 1, delay:delay || 0 } },
  hidden: { opacity: 0,y: yaxis || 20  },
};
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

export default FadeUpBox;
