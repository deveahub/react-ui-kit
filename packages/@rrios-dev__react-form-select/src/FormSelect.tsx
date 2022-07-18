/* eslint-disable @typescript-eslint/indent */
import FormControl, {
  FormControlsProps,
  FormLabel,
} from '@rrios-dev/react-form-control';
import Select, { SelectProps } from '@rrios-dev/react-select';
import { useId } from 'react';

export type FormSelectProps = Omit<FormControlsProps, 'children'> &
  Omit<SelectProps, 'error'> & {
    label?: string;
  };

const FormSelect = ({
  error,
  label,
  helperText,
  ...props
}: FormSelectProps) => {
  const id = useId();
  return (
    <FormControl helperText={helperText} error={error}>
      {label && (
        <FormLabel htmlFor={id} error={Boolean(error)}>
          {label}
        </FormLabel>
      )}
      <Select id={id} error={Boolean(error)} {...props} />
    </FormControl>
  );
};

export default FormSelect;
