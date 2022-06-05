import { State } from "./types";

export const INITAL_STATE: State = {
    currentStep: 'package-type',
    data: {
      packageName: '',
      packageType: 'node',
    },
  };
