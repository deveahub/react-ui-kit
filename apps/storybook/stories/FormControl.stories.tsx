import FormControl, { FormLabel } from '@rrios-dev/react-form-control';
import Input from '@rrios-dev/react-input';
import Stack from '@rrios-dev/react-stack';
import CheckBox from '@rrios-dev/react-checkbox';

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

export const FormInput = ({ children, error, label, ...args }: any) => (
  <Stack
    css={{
      width: '100%',
      maxWidth: 500,
    }}
  >
    <FormControl {...args} error={error}>
      <FormLabel error={Boolean(error)}>{label}</FormLabel>
      <Input error={Boolean(error)} />
    </FormControl>
  </Stack>
);

export const FormCheckbox = ({ children, error, label, ...args }: any) => (
  <Stack
    css={{
      width: '100%',
      maxWidth: 500,
    }}
  >
    <FormControl {...args} error={error} direction="row">
      <CheckBox error={Boolean(error)} />
      <FormLabel error={Boolean(error)}>{label}</FormLabel>
    </FormControl>
  </Stack>
);
