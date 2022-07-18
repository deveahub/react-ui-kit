import { useField } from 'formik';
import FormRadio, { FormRadioProps } from '@rrios-dev/react-form-radio';

export interface FormikRadioProps extends Omit<FormRadioProps, 'value'> {
  name: string;
}

const FormikRadio = ({ name, ...props }: FormikRadioProps) => {
  const [field, meta] = useField(name);

  return (
    <FormRadio
      {...props}
      {...field}
      error={meta.touched ? meta.error : undefined}
    />
  );
};

export default FormikRadio;
