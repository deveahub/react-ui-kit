import CheckBox, { sizeVariant } from '@rrios-dev/react-checkbox';
import Stack from '@rrios-dev/react-stack';
import Text from '@rrios-dev/react-text';

export default {
  title: 'Components/Checkbox',
  component: CheckBox,
  argTypes: {
    checked: {
      control: 'boolean',
      defaulValue: false,
    },
    disabled: {
      control: 'boolean',
      defaulValue: false,
    },
    error: {
      control: 'boolean',
      defaulValue: false,
    },
    size: {
      control: 'select',
      options: Object.keys(sizeVariant),
      defaultValue: 'sm',
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export const Main = (props) => <CheckBox {...props} />;

export const Sizes = () =>
  Object.keys(sizeVariant).map((size) => {
    return (
      <Stack spacing={1} alignItems="center">
        <Text>{size}</Text>
        <CheckBox size={size as any} />
      </Stack>
    );
  });
