import Stack, { StackProps } from '@rrios-dev/react-stack';
import { styled } from '@rrios-dev/styled';

const FieldSetStyled = styled('fieldset', {
  border: 'none',
});

const FieldSet = ({
  children,
  direction = 'column',
  spacing = '3',
  ...props
}: StackProps) => (
  <Stack
    as={FieldSetStyled as any}
    {...props}
    direction={direction}
    spacing={spacing}
  >
    {children}
  </Stack>
);

export default FieldSet;
