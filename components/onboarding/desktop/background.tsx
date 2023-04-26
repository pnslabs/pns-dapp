import classNames from 'classnames';

import styles from './desktop.module.css';
import {
  EthIcon,
  EthPrimaryIcon,
  HappyFaceIcon,
  Logo,
  UsdIcon,
} from '@/public/icons';
import { IBackgroundProps, StepTypes } from './types';

const FirstStepContent = () => {
  return (
    <div className="text-electric-pink-600">
      <div className={styles.title}>
        <div className="relative">
          <div>
            UNL<span className="ml-14">CK</span>
          </div>
          <div className="absolute -top-5 right-36">
            <UsdIcon />
          </div>
        </div>
        <div className="relative py-2">
          <div>YOUR</div>
          <div className="absolute right-12 top-0">
            <EthIcon />
          </div>
        </div>
        <div>CRYPTO</div>
      </div>

      <p className="mt-4 font-medium text-base w-3/4 text-black">
        Receive crypto flawlessly using your mobile phone number.
      </p>
    </div>
  );
};

const SecondStepContent = () => {
  return (
    <div className="text-bluebonnet-550">
      <div className={styles.title}>
        <div className="relative">
          <div>DEFI</div>
          <div className="absolute -top-3 right-24">
            <UsdIcon />
          </div>
        </div>
        <div className="relative py-2">
          <div>MADE</div>
          <div className="absolute -right-2 -top-4">
            <HappyFaceIcon />
          </div>
        </div>
        <div>EASSSY!</div>
      </div>

      <p className="mt-4 font-medium text-base text-black">
        Interact with non-custodial wallets and dApps easily with your phone
        number while staying anon.
      </p>
    </div>
  );
};

const ThirdStepContent = () => {
  return (
    <div className="text-electric-pink-550">
      <div className={styles.title}>
        <div className="relative">
          <div>SENT</div>
          <div className="absolute -top-2 right-12">
            <EthPrimaryIcon />
          </div>
        </div>
        <div className="py-2 whitespace-nowrap">3 ETH TO</div>
        <div>+971-23</div>
      </div>

      <p className="mt-4 font-medium text-base text-black">
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

const OnboardingBackground = ({ step }: IBackgroundProps) => {
  return (
    <div
      className={classNames('absolute w-full h-full', {
        'bg-electric-pink-200': step === StepTypes.first,
        'bg-bluebonnet-250': step === StepTypes.second,
        'bg-electric-pink-250': step === StepTypes.third,
      })}>
      <div className={styles.background}>
        <Logo />
        <div className="mt-11 grid grid-cols-3 h-full">
          <div className="h-85% flex flex-col justify-end">
            <div
              className={classNames(
                'flex items-center gap-2 font-bold text-base',
                {
                  'text-electric-pink-600': step === StepTypes.first,
                  'text-bluebonnet-550': step === StepTypes.second,
                  'text-electric-pink-550': step === StepTypes.third,
                }
              )}>
              {steps.map(item => (
                <div
                  key={item}
                  className={classNames({
                    'opacity-100 text-2xl': item === step,
                    'opacity-50': item !== step,
                  })}>
                  {item}
                </div>
              ))}
            </div>

            {components[step - 1]}
          </div>
          <div className="h-85% col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingBackground;
