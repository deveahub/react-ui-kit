import { render } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots';
import React from 'react';

initStoryshots({
  framework: 'react',
  renderer: render,
});
