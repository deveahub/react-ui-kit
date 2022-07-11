/* eslint-disable @typescript-eslint/indent */
import FormControl, {
  FormControlsProps,
  FormLabel,
} from '@rrios-dev/react-form-control';
import Select, { SelectProps } from '@rrios-dev/react-select';

type FormSelectProps = Omit<FormControlsProps, 'children'> &
  SelectProps & {
    label?: string;
  };

const FormSelect = ({
  error,
  label,
  helperText,
  direction,
  ...props
}: FormSelectProps) => (
  <FormControl helperText={helperText} error={error} direction={direction}>
    {label && <FormLabel error={Boolean(error)}>{label}</FormLabel>}
    <Select error={Boolean(error)} {...props} />
  </FormControl>
);

export default FormSelect;
