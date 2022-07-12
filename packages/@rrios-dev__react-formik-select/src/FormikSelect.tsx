import { useField } from 'formik';
import FormSelect, { FormSelectProps } from '@rrios-dev/react-form-select';

export interface FormikSelectProps extends Omit<FormSelectProps, 'value'> {
  name: string;
}

const FormikSelect = ({ name, ...props }: FormikSelectProps) => {
  const [field, meta] = useField(name);

  return (
    <FormSelect
      {...props}
      {...field}
      error={meta.touched ? meta.error : undefined}
    />
  );
};

export default FormikSelect;
