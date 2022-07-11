import { ComponentProps, styled } from '@rrios-dev/styled';
import { ReactNode } from 'react';
import Text from '@rrios-dev/react-text';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 1,
  defaultVariants: {
    direction: 'column',
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
});

interface FormControlsProps extends ComponentProps<typeof Container> {
  error?: string;
  helperText?: string;
  children: ReactNode;
}

const FormControl = ({
  error,
  helperText,
  children,
  ...props
}: FormControlsProps) => (
  <Container>
    <Container {...props}>{children}</Container>
    {helperText && !error && (
      <Text as="span" size="-1" color="foreground-dark-2">
        {helperText}
      </Text>
    )}
    {error && (
      <Text as="span" size="-1" color="error">
        {error}
      </Text>
    )}
  </Container>
);

export default FormControl;
