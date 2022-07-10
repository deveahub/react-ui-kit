import Text from '@rrios-dev/react-text';
import { ReactNode } from 'react';

interface FormLabelProps {
  error?: boolean;
  children: ReactNode;
}

const FormLabel = ({ error, children }: FormLabelProps) => (
  <Text color={error ? 'error' : 'text'} as="label">
    {children}
  </Text>
);

export default FormLabel;
