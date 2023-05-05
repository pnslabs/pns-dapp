import React, { useEffect } from 'react';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import { wrap } from 'popmotion';

import OnboardingBackground from './background';
import { StepTypes } from './types';

const MobileOnboarding = () => {
  const [pageIndex, setPageIndex] = useCycle(0, 1, 2);

  useEffect(() => {
    const autoTransitionTimer = setInterval(() => {
      if (pageIndex < 2) setPageIndex((pageIndex + 1) % 3);
    }, 4000);

    return () => {
      clearInterval(autoTransitionTimer);
    };
  }, [pageIndex, setPageIndex]);

  const components = [
    <OnboardingBackground step={StepTypes.first} key={0} />,
    <OnboardingBackground step={StepTypes.second} key={1} />,
    <OnboardingBackground step={StepTypes.third} key={2} />,
  ];

  const componentIndex = wrap(0, components.length, pageIndex);

  const handleTap = (event: any, info: any) => {
    const tapX = info.point.x;
    const screenWidth = window.innerWidth;
    const halfScreenWidth = screenWidth / 2;

    if (tapX < halfScreenWidth && pageIndex > 0) {
      setPageIndex((pageIndex + 2) % 3);
    } else if (tapX >= halfScreenWidth && pageIndex < 2) {
      setPageIndex((pageIndex + 1) % 3);
    }
  };

  return (
    <div className="xl:hidden font-Helvetica_Now w-screen h-screen bg-rich-black-500 overflow-hidden relative">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={pageIndex}
          onTap={handleTap}
          initial={{ x: componentIndex === 0 ? 0 : componentIndex * 100 }}
          animate={{
            x:
              componentIndex === pageIndex
                ? 0
                : (componentIndex - pageIndex) * 100,
          }}
          transition={{ duration: 0, ease: 'easeOut' }}>
          {components[componentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobileOnboarding;
