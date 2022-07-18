import { ComponentProps, styled } from '@rrios-dev/styled';
import Text from '@rrios-dev/react-text';
import Stack from '@rrios-dev/react-stack';
import { useId } from 'react';

const StyledRadio = styled('input', {
  accentColor: '$colors$primary',
  outlineColor: '$primary-dark-2',
  margin: 0,
  cursor: 'pointer',
  variants: {
    error: {
      true: {
        borderColor: '$error',
      },
    },
  },
});

export interface RadioProps extends ComponentProps<typeof StyledRadio> {
  label: string;
}

const Radio = ({ label, ...props }: RadioProps) => {
  const id = useId();
  return (
    <Stack alignItems="center" spacing={1}>
      <StyledRadio {...{ htmlFor: id }} {...props} type="radio" />
      <Text id={id} as="label">
        {label}
      </Text>
    </Stack>
  );
};

export default Radio;
