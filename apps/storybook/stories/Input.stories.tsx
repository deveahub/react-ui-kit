import Input, { variantVariant } from '@rrios-dev/react-input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: {
      action: 'onChange',
    },
    onBlur: {
      action: 'onBlur',
    },
    onKeyDown: {
      action: 'onKeyDown',
    },
    onKeyUp: {
      action: 'onKeyUp',
    },
    onKeyPress: {
      action: 'onKeyPress',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Enter text'
    },
    variant: {
      control: 'select',
      options: Object.keys(variantVariant),
      defaultValue: 'default',
    },
  },
};

export const Main = (props) => <Input {...props} />;
