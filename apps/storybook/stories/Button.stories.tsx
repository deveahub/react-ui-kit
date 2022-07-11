import Button from '@rrios-dev/react-button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['primary', 'foreground', 'green', 'orange', 'yellow'],
      defaultValue: 'primary',
    },
    rounded: {
      control: 'boolean',
      defaultValue: true,
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
  },
};

export const Main = (args) => <Button {...args} />;

export const Variants = () => {
  return (
    <div style={{ display: 'flex', gap: 8}}>
      <Button>Primary</Button>
      <Button variant="foreground">Foreground</Button>
      <Button variant="green">Green</Button>
      <Button variant="orange">Orange</Button>
      <Button variant="yellow">Yellow</Button>
    </div>
  );
};

export const FullWidth = () => {
  return (
    <div style={{ display: 'flex', gap: 8, flexDirection: 'column'}}>
      <Button fullWidth>Button</Button>
      <Button fullWidth>Button 2</Button>
    </div>
  );
};

