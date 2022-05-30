import { styled } from '@rrios-dev/styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Container',
  //   component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Container = styled('div', {
  backgroundColor: 'red',
});

export const Story1 = () => {
  return <Container>red</Container>;
};
