import classNames from 'classnames';

import styles from './desktop.module.css';
import {
  EthIcon,
  EthPrimaryIcon,
  FirstOnboardingChat,
  HappyFaceIcon,
  Logo,
  SecondOnboardingChat,
  UsdIcon,
} from '@/public/icons';
import { IBackgroundProps, StepTypes } from './types';
import { PNSButton } from '@/components/UI';
import { BtnVariant } from '@/components/UI/PNS_Button/types';
import Image from 'next/image';
import { HappyFace1, HappyFace2 } from '@/public/images';

const FirstStepContent = () => {
  return (
    <div className="text-electric-pink-600 font-Tanker">
      <div className={styles.title}>
        <div className="relative">
          <div>
            UNL<span className="ml-14">CK</span>
          </div>
          <div className="absolute top-0 right-40">
            <UsdIcon />
          </div>
        </div>
        <div className="relative py-2">
          <div>YOUR</div>
          <div className="absolute right-20 top-4">
            <EthIcon />
          </div>
        </div>
        <div>CRYPTO</div>
      </div>

      <p className="mt-4 font-medium text-base w-3/4 text-black font-Helvetica_Now">
        Receive crypto flawlessly using your mobile phone number.
      </p>
    </div>
  );
};

const SecondStepContent = () => {
  return (
    <div className="text-bluebonnet-550 font-Tanker">
      <div className={styles.title}>
        <div className="relative">
          <div>DEFI</div>
          <div className="absolute top-0 right-32">
            <UsdIcon />
          </div>
        </div>
        <div className="relative py-2">
          <div>MADE</div>
          <div className="absolute right-10 top-0">
            <HappyFaceIcon />
          </div>
        </div>
        <div>EASSSY!</div>
      </div>

      <p className="mt-4 font-medium text-base text-black font-Helvetica_Now">
        Interact with non-custodial wallets and dApps easily with your phone
        number while staying anon.
      </p>
    </div>
  );
};

const ThirdStepContent = () => {
  return (
    <div className="text-electric-pink-550 font-Tanker">
      <div className={styles.title}>
        <div className="relative">
          <div>SENT</div>
          <div className="absolute top-0 right-24">
            <EthPrimaryIcon />
          </div>
        </div>
        <div className="py-2 whitespace-nowrap">3 ETH TO</div>
        <div>+971-23.</div>
      </div>

      <p className="mt-4 pr-8 font-medium text-base text-black font-Helvetica_Now">
        Tether your wallet addresses to your mobile number and start trading
        seamlessly.
      </p>
    </div>
  );
};

const steps = [1, 2, 3];
const components = [
  <FirstStepContent key={0} />,
  <SecondStepContent key={1} />,
  <ThirdStepContent key={2} />,
];

const OnboardingBackground = ({ step, next, prev }: IBackgroundProps) => {
  const _s = StepTypes;
  const _b = BtnVariant;
  return (
    <div
      className={classNames('absolute w-full h-full', {
        'bg-electric-pink-200': step === _s.first,
        'bg-bluebonnet-250': step === _s.second,
        'bg-electric-pink-250': step === _s.third,
      })}>
      <div className={styles.background}>
        <Logo />
        <div className="mt-11 grid grid-cols-3 h-full">
          <div className="h-85% flex flex-col justify-end">
            <div
              className={classNames(
                'flex items-center gap-2 font-bold text-base',
                {
                  'text-electric-pink-600': step === _s.first,
                  'text-bluebonnet-550': step === _s.second,
                  'text-electric-pink-550': step === _s.third,
                }
              )}>
              {steps.map(item => (
                <div
                  key={item}
                  className={classNames('font-Helvetica_Now', {
                    'opacity-100 text-2xl': item === step,
                    'opacity-50': item !== step,
                  })}>
                  {item}
                </div>
              ))}
            </div>

            {components[step - 1]}
          </div>
          <div className="h-85% col-span-2 flex flex-col justify-between">
            <div className="relative w-full h-full">
              <div className="absolute -top-5 left-32">
                <FirstOnboardingChat />
              </div>
              <Image
                priority={true}
                height={342.83}
                width={343.85}
                src={HappyFace1}
                alt="first happy face"
                className="absolute right-4 top-7"
              />
              <div className="absolute top-36 -left-5">
                <SecondOnboardingChat />
              </div>
              <Image
                priority={true}
                height={362.83}
                width={363.85}
                src={HappyFace2}
                alt="second happy face"
                className="absolute left-44 bottom-0"
              />
            </div>
            <div className="flex justify-end items-center gap-2">
              <div className={classNames({ hidden: step === _s.first })}>
                <PNSButton
                  key={0}
                  text={'Back'}
                  variant={_b.outline}
                  on_click={prev}
                />
              </div>
              <PNSButton
                on_click={next}
                key={1}
                text={step === _s.first ? 'Tell me more' : 'Take me in!'}
                variant={step === _s.first ? _b.tertiary : _b.primary}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingBackground;
