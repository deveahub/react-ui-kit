import { ReactNode } from 'react';
import Text from '@rrios-dev/react-text';
import Stack, { StackProps } from '@rrios-dev/react-stack';

export interface FormControlsProps extends StackProps {
  error?: string | undefined;
  helperText?: string;
  children: ReactNode;
  childrenContainerProps?: StackProps;
}

const FormControl = ({
  error,
  helperText,
  children,
  childrenContainerProps,
  ...props
}: FormControlsProps) => (
  <Stack spacing="015" direction="column" {...props}>
    <Stack spacing="015" direction="column" {...childrenContainerProps}>
      {children}
    </Stack>
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
  </Stack>
);

export default FormControl;
