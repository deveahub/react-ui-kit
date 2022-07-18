import FormControl, { FormLabel } from '@rrios-dev/react-form-control';
import { RadioGroup, RadioGroupProps } from '@rrios-dev/react-radio';
import { ComponentProps } from '@rrios-dev/styled';

export type FormRadioProps = Omit<
  ComponentProps<typeof FormControl>,
  'children'
> &
  Omit<RadioGroupProps, 'error'> & {
    label?: string;
    name: string;
  };

const FormRadio = ({ error, label, helperText, ...props }: FormRadioProps) => (
  <FormControl
    helperText={helperText}
    error={error}
    spacing="2"
    childrenContainerProps={{
      spacing: '2',
    }}
  >
    {label && <FormLabel error={Boolean(error)}>{label}</FormLabel>}
    <RadioGroup {...props} error={Boolean(error)} />
  </FormControl>
);

export default FormRadio;
