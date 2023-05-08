export enum StepTypes {
  first = 1,
  second = 2,
  third = 3,
}

export interface IBackgroundProps {
  step: StepTypes;
  index?: number;
}
