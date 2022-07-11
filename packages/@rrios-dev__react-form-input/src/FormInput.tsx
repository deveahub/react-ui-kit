import FormControl, { FormLabel } from '@rrios-dev/react-form-control';
import Input from '@rrios-dev/react-input';
import { ComponentProps } from '@rrios-dev/styled';

interface FormInputProps
  extends Omit<ComponentProps<typeof FormControl>, 'children'> {
  label?: string;
}

const FormInput = ({ error, label, ...props }: FormInputProps) => (
  <FormControl {...props} error={error}>
    {label && <FormLabel error={Boolean(error)}>{label}</FormLabel>}
    <Input error={Boolean(error)} />
  </FormControl>
);

export default FormInput;
