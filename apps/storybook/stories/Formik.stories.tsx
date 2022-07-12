import * as yup from 'yup';
import { Formik, Form } from 'formik';
import FormCheckBoxComponent from '@rrios-dev/react-form-checkbox';
import FormControl from '@rrios-dev/react-form-control';
import FormSelectComponent from '@rrios-dev/react-form-select';
import FormikInput from '@rrios-dev/react-formik-input';
import FormikSelect from '@rrios-dev/react-formik-select';
import FormikCheckBox from '@rrios-dev/react-formik-checkbox';
import Button from '@rrios-dev/react-button';
import Stack from '@rrios-dev/react-stack';

export default {
  title: 'Components/Formik',
  component: FormControl,
  parameters: {
    controls: {
      exclude: ['ref', 'direction', 'css'],
    },
  },
  argTypes: {
    onSubmit: {
      action: 'onSubmit',
    },
  },
};

export const Main = (props: any) => (
  <Formik
    initialValues={{
      name: '',
      agreeTerms: false,
      option: '',
    }}
    validationSchema={yup.object({
      name: yup.string().required(),
      option: yup
        .string()
        .oneOf(['element-1', 'element-2', 'element-3'])
        .required(),
      agreeTerms: yup.bool().equals([true], 'you must accept terms'),
    })}
    onSubmit={props.onSubmit}
  >
    <Stack
      as={Form}
      direction="column"
      spacing={2}
      css={{
        width: '100%',
        maxWidth: 500,
      }}
    >
      <FormikInput label="Name" name="name" helperText="Enter your name" />
      <FormikSelect
        name="option"
        emptyText='Choose element'
        options={[
          {
            value: 'element-1',
            text: 'Element 1',
          },
          {
            value: 'element-2',
            text: 'Element 2',
          },
          {
            value: 'element-3',
            text: 'Element 3',
          },
        ]}
      />
      <FormikCheckBox label="Agree terms" name="agreeTerms" />
      <Button type="submit">Submit</Button>
    </Stack>
  </Formik>
);
