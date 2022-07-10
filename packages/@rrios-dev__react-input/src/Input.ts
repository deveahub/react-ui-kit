import { styled } from '@rrios-dev/styled';

export const variantVariant = {
  default: {
    borderColor: '$foreground-dark-0',
    borderStyle: 'solid',
    outlineColor: '$primary-dark-2',
    p: 1,
    fontSize: '$0',
    borderRadius: '$3',
  },
  base: {
    borderStyle: 'none',
    outline: 'none',
  },
} as const;

const Input = styled('input', {
  defaultVariants: {
    variant: 'default',
  },

  '&::placeholder': {
    color: '$foreground-dark-1',
  },
  variants: {
    variant: variantVariant,
    error: {
      true: {
        borderColor: '$error',
      },
    },
  },
});

export default Input;
