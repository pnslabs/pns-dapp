import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from './mobile.module.css';
import {
  EthMobileIcon,
  EthPrimaryIcon,
  HappyFaceIcon,
  UsdIconMobile,
  UsdPrimaryIcon,
} from '@/public/icons';
import { IBackgroundProps, StepTypes } from './types';
import { PNSButton, PNSLogo } from '@/components/UI';
import { BtnVariant } from '@/components/UI/PNS_Button/types';
import { LogoVariant } from '@/components/UI/PNS_Logo/types';

const ProgressBar = () => {
  return (
    <div
      className={`bg-[#ffffff3d] flex justify-items-start items-stretch overflow-hidden ${styles.progress__bar}`}>
      <motion.div
        className="w-0 bg-white"
        animate={{
          width: '100%',
        }}
        transition={{ duration: 4 }}
      />
    </div>
  );
};

const FirstStepContent = () => {
  return (
    <div>
      <div className="relative">
        <div className={`text-white ${styles.title}`}>
          UNL&ensp;CK YOUR CRYPTO
        </div>
        <div className="absolute top-0 right-[108px] ">
          <UsdPrimaryIcon />
        </div>
        <div className="absolute top-[105px] right-7">
          <EthMobileIcon />
        </div>
      </div>
      <p className={`w-[252px] text-white ${styles.text}`}>
        Send & receive crypto flawlessly using your mobile phone number.
      </p>
    </div>
  );
};

const SecondStepContent = () => {
  return (
    <div>
      <div className="relative">
        <div className={`text-[#D8DCFF] ${styles.title}`}>
          DEFI MADE EASSSY!
        </div>
        <div className="absolute top-0 right-14 ">
          <UsdIconMobile />
        </div>
        <div className="absolute top-[85px] -right-6 ">
          <HappyFaceIcon />
        </div>
      </div>
      <p className={`w-[296px] text-white ${styles.text}`}>
        Interact with non-custodial wallets and dApps easily with your phone
        number.
      </p>
    </div>
  );
};

const ThirdStepContent = () => {
  return (
    <div>
      <div className="relative">
        <div className={`text-electric-pink-550 ${styles.title}`}>
          SENT <br /> 3 ETH TO +971-23.
        </div>
        <div className="absolute top-0 right-10 ">
          <EthPrimaryIcon />
        </div>
      </div>
      <p className={`w-[316px] text-black ${styles.text}`}>
        Tether your addresses to your mobile number and start trading
        seamlessly.
      </p>
    </div>
  );
};

const components = [
  <FirstStepContent key={0} />,
  <SecondStepContent key={1} />,
  <ThirdStepContent key={2} />,
];

const OnboardingBackground = ({ step }: IBackgroundProps) => {
  const _s = StepTypes;
  const _b = BtnVariant;
  const _l = LogoVariant;

  return (
    <div
      className={classNames('w-full h-screen flex flex-col items-center ', {
        'bg-electric-pink-500': step === _s.first,
        'bg-bluebonnet-500': step === _s.second,
        'bg-[#FF97EE]': step === _s.third,
      })}>
      <div className="relative h-full flex flex-col items-center">
        <div className=" w-full flex justify-center items-center gap-2.5 mt-14 mb-7 ">
          {components.map((item, index) => (
            <div key={index}>
              {index === step - 1 ? (
                <ProgressBar />
              ) : (
                <div
                  className={classNames(`${styles.progress__bar}`, {
                    'bg-white': step - 1 > index,
                    'bg-[#ffffff3d] ': step - 1 < index,
                  })}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start px-7">
          <PNSLogo variant={_l.primary} />
          <div className="mt-10 ">{components[step - 1]}</div>
        </div>
        {step === StepTypes.third && (
          <div className="absolute top-[736px] left-[208px]">
            <PNSButton text={'Done'} variant={_b.secondary} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingBackground;
