import { ComponentProps, styled } from '@rrios-dev/styled';

const Stack = styled('div', {
  display: 'flex',
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'fit-content',
      },
    },
    fullHeight: {
      true: {
        height: '100%',
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    spacing: {
      1: {
        gap: 1,
      },
      '015': {
        gap: 1.5,
      },
      2: {
        gap: 2,
      },
      3: {
        gap: 3,
      },
      4: {
        gap: 4,
      },
      5: {
        gap: 5,
      },
      6: {
        gap: 6,
      },
      7: {
        gap: 7,
      },
    },
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },
});

export type StackProps = ComponentProps<typeof Stack>;

export default Stack;
