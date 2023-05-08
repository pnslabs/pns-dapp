import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './mobile.module.css';
import { IBackgroundProps, StepTypes } from './types';
import {
  EthMobileIcon,
  EthPrimaryIcon,
  HappyFaceIcon,
  UsdIconMobile,
  UsdPrimaryIcon,
} from '@/public/icons';
import { PNSButton, PNSLogo } from '@/components/UI';
import { BtnVariant } from '@/components/UI/PNS_Button/types';
import { LogoVariant } from '@/components/UI/PNS_Logo/types';

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
      <p className={`w-[252px] text-white ${styles.text} md:w-80`}>
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
        <div className="absolute top-0 right-16 md:right-28">
          <UsdIconMobile />
        </div>
        <div className="absolute top-[85px] -right-4 md:right-9 ">
          <HappyFaceIcon />
        </div>
      </div>
      <p className={`w-[296px] text-white ${styles.text} md:w-96`}>
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
        <div className="absolute top-0 right-11 md:right-24 ">
          <EthPrimaryIcon />
        </div>
      </div>
      <p className={`w-[316px] text-black ${styles.text} md:w-96`}>
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
        <div className=" w-full flex justify-center items-center gap-2.5 mt-14 mb-7 md:gap-3">
          {components.map((_, index) => (
            <div key={index} className={styles.progress__bar}>
              <AnimatePresence initial={true}>
                <motion.div
                  style={{ backgroundColor: '#fff' }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4 }}
                  className={classNames({
                    hidden: index !== step - 1,
                  })}
                />
              </AnimatePresence>
              <div
                className={classNames('w-full', {
                  'bg-white': step - 1 > index!,
                  hidden: index === step - 1,
                })}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start px-7">
          <PNSLogo variant={_l.primary} />
          <div className="mt-10 ">{components[step - 1]}</div>
        </div>

        <div
          className={classNames('absolute top-[736px] left-52 md:left-60', {
            hidden: step !== _s.third,
          })}>
          <PNSButton text={'Done'} variant={_b.secondary} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingBackground;
