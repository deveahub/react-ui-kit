import { Text } from 'ink';
import TextInput from 'ink-text-input';
import React, { useState } from 'react';

import useGlobalState from '../state/useGlobalState';

const PackageTypeSelect = () => {
  const [value, setValue] = useState('');
  const {
    handlers: { goToFinishStep },
  } = useGlobalState();
  return (
    <>
      <Text>Put a name for your package:</Text>
      <TextInput
        value={value}
        onChange={setValue}
        onSubmit={goToFinishStep}
        placeholder="hello"
      />
    </>
  );
};

export default PackageTypeSelect;
