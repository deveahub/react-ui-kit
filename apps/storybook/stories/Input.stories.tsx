import Input from '@rrios-dev/react-input';

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
  },
};

export const Main = (props) => <Input {...props} />;
