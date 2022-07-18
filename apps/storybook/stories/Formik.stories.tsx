import Button from '@rrios-dev/react-button';
import FormControl from '@rrios-dev/react-form-control';
import FormikCheckBox from '@rrios-dev/react-formik-checkbox';
import FormikInput from '@rrios-dev/react-formik-input';
import FormikRadio from '@rrios-dev/react-formik-radio';
import FormikSelect from '@rrios-dev/react-formik-select';
import Stack from '@rrios-dev/react-stack';
import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

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
      radio: '',
    }}
    validationSchema={yup.object({
      name: yup.string().required(),
      radio: yup
      .string()
      .oneOf(['element-1', 'element-2', 'element-3'])
      .required(),
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
      spacing={3}
      css={{
        width: '100%',
        maxWidth: 500,
      }}
    >
      <FormikInput label="Name" name="name" helperText="Enter your name" />
      <FormikRadio
      direction={{
        '@initial': 'column',
        '@bp1': 'row'
      }}
        label="Choose element"
        name="radio"
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
      <FormikSelect
        name="option"
        emptyText="Choose element"
        label='Choose select element'
        helperText='Helper text'
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
