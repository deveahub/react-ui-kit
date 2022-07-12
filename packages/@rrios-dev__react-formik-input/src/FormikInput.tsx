import { useField } from 'formik';
import FormInput, { FormInputProps } from '@rrios-dev/react-form-input';

interface FormikInputProps extends FormInputProps {
  name: string;
}

const FormikInput = ({ name, ...props }: FormikInputProps) => {
  const [field, meta] = useField(name);

  return (
    <FormInput
      {...props}
      {...field}
      error={meta.touched ? meta.error : undefined}
    />
  );
};

export default FormikInput;
