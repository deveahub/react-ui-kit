import { styled } from '@rrios-dev/styled';

export const sizeVariant = {
  sm: {
    size: 2.5,
    '&::before': {
      fontSize: '$-2',
    },
  },
  md: {
    size: 3,
    '&::before': {
      fontSize: '$0',
    },
  },
  lg: {
    size: 5,
    '&::before': {
      fontSize: '$2',
    },
  },
};

const CheckBox = styled('input', {
  appearance: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$3',
  backgroundColor: '$foreground-light-0',
  borderStyle: 'solid',
  borderColor: '$foreground',
  cursor: 'pointer',
  transition: '$0',
  margin: 0,
  outlineColor: '$primary-dark-2',

  '&:hover': {
    backgroundColor: '$foreground-dark-0',
  },

  '&:active': {
    borderColor: '$foreground-dark-1',
    backgroundColor: '$foreground-dark-1',
  },

  '&:checked': {
    backgroundColor: '$primary',
    borderColor: '$primary',
    '&::before': {
      content: '✔',
      color: 'white',
    },
  },
  '&:disabled': {
    backgroundColor: '$foreground-dark-2',
    borderColor: '$foreground-dark-2',
    cursor: 'not-allowed',
    '&::before': {
      content: '',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
  variants: {
    size: sizeVariant,
    error: {
      true: {
        borderColor: '$error',
        backgroundColor: '$error',
        '&:hover': {
          backgroundColor: '$error',
        },
        '&:active': {
          borderColor: '$error-dark-1',
          backgroundColor: '$error-dark-1',
        },
        '&:checked': {
          borderColor: '$error',
          backgroundColor: '$error',
        },
      },
    },
  },
});

CheckBox.defaultProps = {
  type: 'checkbox',
};

export default CheckBox;
