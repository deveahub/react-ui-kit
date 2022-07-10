import Text, {
  asVariant, decorationVariant, sizeVariant, weightVariant
} from '@rrios-dev/react-text';
import { defaultTheme } from '@rrios-dev/styled';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(sizeVariant),
      defaultValue: '0',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      defaultValue: 'left',
    },
    as: {
      control: 'select',
      options: Object.keys(asVariant),
      defaultValue: 'p',
    },
    decoration: {
      control: 'select',
      options: Object.keys(decorationVariant),
      defaultValue: undefined,
    },
    children: {
      control: 'text',
      defaultValue: "I'm Text component",
    },
    color: {
      control: 'select',
      options: Object.keys(defaultTheme.colors),
      default: 'text',
    },
    weight: {
      control: 'select',
      options: Object.keys(weightVariant),
      default: 'text',
    },
  },
};

export const Main = ({ children, ...args }) => (
  <Text {...args}>{children}</Text>
);

export const Variants = ({ children }) =>
  Object.keys(asVariant).map((option) => {
    return (
      <Text key={option} as={option as any}>
        ({option}) {children}
      </Text>
    );
  });

export const Sizes = ({ children }) =>
  Object.keys(sizeVariant).map((size) => {
    return (
      <Text key={size} size={size as any}>
        ({size}) {children}
      </Text>
    );
  });

export const Colors = ({ children }) =>
  Object.keys(defaultTheme.colors).map((color) => {
    return (
      <Text key={color} color={color as any}>
        ({color}) {children}
      </Text>
    );
  });

export const Weight = ({ children }) =>
  Object.keys(weightVariant).map((weight) => {
    return (
      <Text key={weight} weight={weight as any}>
        ({weight}) {children}
      </Text>
    );
  });
