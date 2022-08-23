export type PackageType = 'react' | 'node' | 'nextjs';

export type Step = 'package-type' | 'package-name';

export interface StateData {
  packageName: string;
  packageType: PackageType;
}

export interface State {
  currentStep: Step;
  data: StateData;
}

export interface StateHandlers {
  goToNameStep: (packageType: PackageType) => void;
  goToFinishStep: (packageName: string) => void;
}
