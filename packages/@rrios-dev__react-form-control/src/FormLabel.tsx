import Text from '@rrios-dev/react-text';
import { HTMLAttributes, ReactNode } from 'react';

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  error?: boolean;
  children: ReactNode;
  htmlFor: string;
}
const FormLabel = ({ error, children, ...props }: FormLabelProps) => (
  <Text {...(props as {})} color={error ? 'error' : 'text'} as="label">
    {children}
  </Text>
);

export default FormLabel;
