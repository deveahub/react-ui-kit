import Stack, { StackProps } from '@rrios-dev/react-stack';
import { ChangeEventHandler } from 'react';

import Radio from './Radio';

interface Option {
  value: string;
  text: string;
}

export interface RadioGroupProps extends Pick<StackProps, 'direction'> {
  options: Array<Option>;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error?: boolean;
}

const RadioGroup = ({
  options,
  name,
  onChange,
  value,
  direction = 'column',
  error,
}: RadioGroupProps) => (
  <Stack spacing={2} direction={direction}>
    {options.map((option) => (
      <Radio
        error={error}
        key={option.value}
        onChange={onChange}
        checked={value === option.value}
        name={name}
        value={option.value}
        label={option.text}
      />
    ))}
  </Stack>
);

export default RadioGroup;
