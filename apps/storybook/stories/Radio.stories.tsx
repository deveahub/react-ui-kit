import Radio, { RadioGroup } from '@rrios-dev/react-radio';
import { useState } from 'react';
import React from 'react';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    controls: {
      exclude: ['ref', 'css'],
    },
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Element 1',
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export const Main = (props) => <Radio {...props} />;

export const Group = ({ onChange }) => {
  const [value, setValue] = useState('');

  return (
    <RadioGroup
      name="element"
      onChange={(e) => {
        onChange(e);
        setValue(e.target.value);
      }}
      value={value}
      options={[
        {
          text: 'Element 1',
          value: 'element-1',
        },
        {
          text: 'Element 2',
          value: 'element-2',
        },
        {
          text: 'Element 3',
          value: 'element-3',
        },
      ]}
    />
  );
};
