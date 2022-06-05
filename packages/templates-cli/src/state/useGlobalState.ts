import { useContext } from 'react';

import context from './context';

const useGlobalState = () => {
  const state = useContext(context);

  if (!state) throw new Error('Content is not defined');

  return state;
};

export default useGlobalState;
