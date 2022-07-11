import FormControl, { FormLabel } from '@rrios-dev/react-form-control';
import CheckBox from '@rrios-dev/react-checkbox';
import { ComponentProps } from '@rrios-dev/styled';

interface FormInputProps
  extends Omit<ComponentProps<typeof FormControl>, 'children'> {
  label?: string;
}

const FormInput = ({ error, label, ...props }: FormInputProps) => (
  <FormControl {...props} error={error} direction="row">
    <CheckBox error={Boolean(error)} />
    <FormLabel error={Boolean(error)}>{label}</FormLabel>
  </FormControl>
);

export default FormInput;
