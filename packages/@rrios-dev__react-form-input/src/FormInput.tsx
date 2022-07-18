import FormControl, { FormLabel } from '@rrios-dev/react-form-control';
import Input, { InputProps } from '@rrios-dev/react-input';
import { ComponentProps } from '@rrios-dev/styled';
import { useId } from 'react';

export type FormInputProps = Omit<
  ComponentProps<typeof FormControl>,
  'children'
> &
  Omit<InputProps, 'error'> & {
    label?: string;
  };

const FormInput = ({ error, label, helperText, ...props }: FormInputProps) => {
  const id = useId();
  return (
    <FormControl
      helperText={helperText}
      error={error}
      spacing="015"
      childrenContainerProps={{
        spacing: '015',
      }}
    >
      {label && (
        <FormLabel htmlFor={id} error={Boolean(error)}>
          {label}
        </FormLabel>
      )}
      <Input {...props} id={id} error={Boolean(error)} />
    </FormControl>
  );
};

export default FormInput;
