import React, { ReactElement } from 'react';

import useGlobalState from '../state/useGlobalState';
import { Step } from '../types';
import PackageNameInput from './PackageNameInput';
import PackageTypeSelect from './PackageTypeSelect';

const steps: Record<Step, () => ReactElement> = {
  'package-type': PackageTypeSelect,
  'package-name': PackageNameInput,
};

const Steps = () => {
  const { currentStep } = useGlobalState();

  const Component = steps[currentStep];

  return <Component />;
};

export default Steps;
