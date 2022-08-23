import { Text } from 'ink';
import SelectInput from 'ink-select-input';
import { Item } from 'ink-select-input/build/SelectInput';
import React from 'react';

import useGlobalState from '../state/useGlobalState';
import { PackageType } from '../types';

const ITEMS: Array<Item<PackageType>> = [
  {
    label: 'React',
    value: 'react',
  },
  {
    label: 'Node',
    value: 'node',
  },
  {
    label: 'NextJS',
    value: 'nextjs',
  },
];

const PackageTypeSelect = () => {
  const {
    handlers: { goToNameStep },
  } = useGlobalState();
  return (
    <>
      <Text>Select package type:</Text>
      <SelectInput
        onSelect={(option) => goToNameStep(option.value)}
        limit={5}
        items={ITEMS}
      />
    </>
  );
};

export default PackageTypeSelect;
