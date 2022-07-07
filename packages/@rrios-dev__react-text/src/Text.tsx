import { ComponentProps, styled, defaultTheme } from '@rrios-dev/styled';

export const asOptions = {
  p: {
    fontSize: '$0',
  },
  h1: {
    fontSize: '$4',
  },
  h2: {
    fontSize: '$3',
  },
  h3: {
    fontSize: '$2',
  },
  h4: {
    fontSize: '$1',
  },
  h5: {
    fontSize: '$0',
  },
  h6: {
    fontSize: '$-1',
  },
} as const;

export const sizeOptions = {
  '-3': {
    fontSize: '$-3',
  },
  '-2': {
    fontSize: '$-2',
  },
  '-1': {
    fontSize: '$-1',
  },
  0: {
    fontSize: '$0',
  },
  1: {
    fontSize: '$1',
  },
  2: {
    fontSize: '$2',
  },
  3: {
    fontSize: '$3',
  },
  4: {
    fontSize: '$4',
  },
} as const;

export const textAlignOptions = {
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
} as const;

export const weightOptions = {
  light: {
    fontWeight: '$light',
  },
  regular: {
    fontWeight: '$regular',
  },
  medium: {
    fontWeight: '$medium',
  },
  bold: {
    fontWeight: '$bold',
  },
} as const;

export const decorationOptions = {
  underline: {
    textDecoration: 'underline',
  },
} as const;

const StyledText = styled('p', {
  color: '$text',
  defaultVariants: {
    as: 'p',
    weight: 'regular',
  },
  variants: {
    decoration: decorationOptions,
    as: asOptions,
    size: sizeOptions,
    textAlign: textAlignOptions,
    weight: weightOptions,
  },
});

interface TextProps extends ComponentProps<typeof StyledText> {
  color?: keyof typeof defaultTheme['colors'];
}

const Text = ({ children, color = 'text', ...props }: TextProps) => (
  <StyledText
    {...props}
    css={{
      color: `$${color}`,
    }}
  >
    {children}
  </StyledText>
);

export default Text;
