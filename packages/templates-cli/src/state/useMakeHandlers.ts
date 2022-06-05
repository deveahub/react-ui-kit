import { useApp } from 'ink';
import { Dispatch, SetStateAction } from 'react';

import createPackage from '../creator/createPackage';
import { State, StateHandlers } from '../types';

const useMakeHandler = (
  _: State,
  setState: Dispatch<SetStateAction<State>>
): StateHandlers => {
  const { exit } = useApp();
  const goToNameStep: StateHandlers['goToNameStep'] = (packageType) => {
    setState((currState) => ({
      currentStep: 'package-name',
      data: {
        ...currState.data,
        packageType,
      },
    }));
  };

  const goToFinishStep: StateHandlers['goToFinishStep'] = (packageName) => {
    setState((currState) => {
      const newState: State = {
        currentStep: 'package-name',
        data: {
          ...currState.data,
          packageName,
        },
      };

      createPackage(newState.data);

      return newState;
    });

    exit();
  };

  return {
    goToFinishStep,
    goToNameStep,
  };
};

export default useMakeHandler;
