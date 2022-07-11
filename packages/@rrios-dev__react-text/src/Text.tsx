import { ComponentProps, styled, defaultTheme } from '@rrios-dev/styled';

export const asVariant = {
  p: {
    fontSize: '$0',
    lineHeight: '1em',
  },
  h1: {
    fontSize: '$4',
    lineHeight: '$h1',
  },
  h2: {
    fontSize: '$3',
    lineHeight: '$h2',
  },
  h3: {
    fontSize: '$2',
    lineHeight: '$h3',
  },
  h4: {
    fontSize: '$1',
    lineHeight: '$h4',
  },
  h5: {
    fontSize: '$0',
    lineHeight: '$h5',
  },
  h6: {
    fontSize: '$-1',
    lineHeight: '$h6',
  },
  label: {
    fontSize: '$0',
    lineHeight: '1em',
  },
  span: {
    fontSize: '$0',
    lineHeight: '1em',
  },
} as const;

export const sizeVariant = {
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

export const textAlignVariant = {
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

export const weightVariant = {
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

export const decorationVariant = {
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
    decoration: decorationVariant,
    as: asVariant,
    size: sizeVariant,
    textAlign: textAlignVariant,
    weight: weightVariant,
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
