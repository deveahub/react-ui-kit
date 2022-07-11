import { styled } from '@rrios-dev/styled';

const Button = styled('button', {
  borderWidth: '$0',
  borderStyle: 'solid',
  cursor: 'pointer',
  color: '$bg',
  fontSize: '$0',
  transition: '$0',
  outlineColor: '$primary-dark-2',
  px: 2,
  py: 1.5,
  defaultVariants: {
    rounded: true,
    variant: 'primary',
    disabled: false,
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        borderColor: '$primary-dark-0',
      },
      foreground: {
        backgroundColor: '$foreground-dark-0',
        borderColor: '$foreground-dark-1',
      },
      green: {
        backgroundColor: '$green-dark-0',
        borderColor: '$green-dark-1',
      },
      orange: {
        backgroundColor: '$orange-dark-0',
        borderColor: '$orange-dark-1',
      },
      yellow: {
        backgroundColor: '$yellow-dark-0',
        borderColor: '$yellow-dark-1',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    rounded: {
      true: {
        borderRadius: 3,
      },
    },
    disabled: {
      true: {
        color: '$bg-dark-0',
        filter: 'brightness(70%)',
        cursor: 'not-allowed',
      },
      false: {
        '&:hover': {
          filter: 'brightness(90%)',
          boxShadow: '0 0 3px $colors$primary-dark-2',
        },

        '&:active': {
          filter: 'brightness(80%)',
        },
      },
    },
  },
});

export default Button;
