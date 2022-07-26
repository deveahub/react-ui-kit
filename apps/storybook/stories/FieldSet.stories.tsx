import FieldSet from '@rrios-dev/react-fieldset';
import React from 'react';

export default {
  title: 'Components/FieldSet',
  component: FieldSet,
  argTypes: {
    direction: {
      control: 'select',
      options: ['column', 'row'],
      defaultValue: undefined,
    },
    justifyContent: {
      control: 'select',
      options: ['center', 'start', 'end'],
      defaultValue: undefined,
    },
    alignItems: {
      control: 'select',
      options: ['center', 'start', 'end'],
      defaultValue: undefined,
    },
    spacing: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7],
      defaultValue: 1,
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
    fullHeight: {
      control: 'boolean',
      defaultValue: false,
    },
    count: {
      control: 'number',
      defaultValue: 3,
    },
  },
};

export const Main = ({ count, ...args }) => (
  <FieldSet>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </FieldSet>
);
