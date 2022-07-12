import { useField } from 'formik';
import FormCheckBox, {
  FormCheckBoxProps,
} from '@rrios-dev/react-form-checkbox';

export interface FormikCheckBoxProps extends FormCheckBoxProps {
  name: string;
}

const FormikCheckBox = ({ name, ...props }: FormikCheckBoxProps) => {
  const [field, meta] = useField(name);

  return (
    <FormCheckBox
      {...props}
      {...field}
      error={meta.touched ? meta.error : undefined}
    />
  );
};

export default FormikCheckBox;
