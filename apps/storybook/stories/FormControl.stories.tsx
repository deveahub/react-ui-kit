import FormCheckBoxComponent from '@rrios-dev/react-form-checkbox';
import FormControl from '@rrios-dev/react-form-control';
import FormSelectComponent from '@rrios-dev/react-form-select';
import FormInputComponent from '@rrios-dev/react-form-input';
import Stack from '@rrios-dev/react-stack';

export default {
  title: 'Components/FormControl',
  component: FormControl,
  parameters: {
    controls: {
      exclude: ['ref', 'direction', 'css'],
    },
  },
  argTypes: {
    error: {
      control: 'text',
      defaultValue: '',
    },
    label: {
      control: 'text',
      defaultValue: 'Input label',
    },
    helperText: {
      control: 'text',
      defaultValue: 'Help for user',
    },
  },
};

export const FormInput = (props: any) => (
  <Stack
    css={{
      width: '100%',
      maxWidth: 500,
    }}
  >
    <FormInputComponent {...props} />
  </Stack>
);

export const FormCheckbox = (props: any) => (
  <FormCheckBoxComponent {...props} />
);

export const FormSelect = (props: any) => (
  <FormSelectComponent
    emptyText="Choose element"
    options={[
      {
        text: 'Element 1',
        value: 'element-1',
      },
      {
        text: 'Element 2',
        value: 'element-2',
      },
      {
        text: 'Element 3',
        value: 'element-3',
      },
    ]}
    {...props}
  />
);
