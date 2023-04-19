import classNames from 'classnames';
import { IBackgroundProps, StepTypes } from './types';

const OnboardingBackground = ({ step }: IBackgroundProps) => {
  return (
    <div
      className={classNames('absolute w-full h-full', {
        'bg-electric-pink-250': step === StepTypes.first,
        'bg-bluebonnet-250': step === StepTypes.second,
        'bg-electric-pink-350': step === StepTypes.third,
      })}>
      {step === StepTypes.first && <h1>This is first component</h1>}

      {step === StepTypes.second && <h1>This is second component</h1>}

      {step === StepTypes.third && <h1>This is third component</h1>}
    </div>
  );
};

export default OnboardingBackground;
