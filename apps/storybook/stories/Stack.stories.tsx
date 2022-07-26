import Stack from '@rrios-dev/react-stack';
import React from 'react';

export default {
  title: 'Components/Stack',
  component: Stack,
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
  <Stack
    {...args}
    css={{
      '& > div': {
        backgroundColor: '$foreground',
        color: '$text',
        borderRadius: '$1',
        p: 1,
      },
    }}
  >
    {new Array(...new Array(count).keys()).map((idx) => (
      <div key={idx}>Item {idx + 1}</div>
    ))}
  </Stack>
);

export const FullWidth = () => {
  return (
    <Stack
      direction="column"
      fullWidth
      spacing={1}
      css={{
        '& > div': {
          backgroundColor: '$foreground-dark-0',
          color: '$text',
          borderRadius: '$1',
          p: 1,
        },
      }}
    >
      {new Array(...new Array(8).keys()).map((idx) => (
        <div key={idx}>Item {idx + 1}</div>
      ))}
    </Stack>
  );
};

export const DirectionColumn = () => {
  return (
    <Stack
      direction="column"
      spacing={1}
      css={{
        '& > div': {
          backgroundColor: '$foreground-dark-0',
          color: '$text',
          borderRadius: '$1',
          p: 1,
        },
      }}
    >
      {new Array(...new Array(8).keys()).map((idx) => (
        <div key={idx}>Item {idx + 1}</div>
      ))}
    </Stack>
  );
};
