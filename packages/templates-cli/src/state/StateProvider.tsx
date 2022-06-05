import React, { ReactNode, useState } from 'react';

import { INITAL_STATE } from '../constants';
import { State } from '../types';
import context from './context';
import useMakeHandler from './useMakeHandlers';

interface StateProviderProps {
  children: ReactNode;
}

const StateProvider = ({ children }: StateProviderProps) => {
  const [state, setState] = useState<State>(INITAL_STATE);
  const handlers = useMakeHandler(state, setState);

  return (
    <context.Provider
      value={{
        ...state,
        handlers,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default StateProvider;
