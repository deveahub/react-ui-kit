import { Box, render, Text } from 'ink';
import React from 'react';

import StateProvider from './state/StateProvider';
import Steps from './steps';

function Main() {
  return (
    <Box flexDirection="column">
      <Box borderStyle="bold" justifyContent="center">
        <Text bold>🤟 TEMPLATES CLI 🤟</Text>
      </Box>
      <StateProvider>
        <Steps />
      </StateProvider>
    </Box>
  );
}

render(<Main />);
