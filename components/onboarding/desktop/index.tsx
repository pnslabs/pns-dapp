import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import OnboardingBackground from './background';
import { StepTypes } from './types';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function DesktopOnboarding() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const next = () => {
    if (page === 2) {
      // take user to home page
    } else {
      paginate(1);
    }
  };

  const prev = () => {
    paginate(-1);
  };

  const components = [
    <OnboardingBackground next={next} step={StepTypes.first} key={0} />,
    <OnboardingBackground
      next={next}
      prev={prev}
      step={StepTypes.second}
      key={1}
    />,
    <OnboardingBackground
      next={next}
      prev={prev}
      step={StepTypes.third}
      key={2}
    />,
  ];

  const componentIndex = wrap(0, components.length, page);

  return (
    <div className="hidden font-Helvetica_Now w-screen h-screen bg-rich-black-500 overflow-hidden relative xl:flex justify-center items-center">
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 500, damping: 40 },
            opacity: { duration: 0.2 },
          }}
          className="w-full h-full">
          {components[componentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
