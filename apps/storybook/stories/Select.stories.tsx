import Select from '@rrios-dev/react-select';
import React from 'react';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    emptyText: {
      control: 'text',
      defaultValue: 'Choose element',
    },
    value: {
      control: 'select',
      options: ['element-1', 'element-2', 'element-3'],
    },
    onChange:{
      action: 'onChange'
    },
    options: {
      control: 'object',
      defaultValue: [
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
      ],
    },
  },
};

export const Main = (props) => <Select {...props}/>;
