import { ComponentProps, styled } from '@rrios-dev/styled';

interface Option {
  text: string;
  value: string;
}

const StyledSelect = styled('select', {
  p: 1,
  fontSize: '$0',
  borderRadius: '$3',
  borderColor: '$foreground-dark-0',
  position: 'relative',
  color: '$text',
  outlineColor: '$primary-dark-2',
  variants: {
    error: {
      true: {
        borderColor: '$error',
      },
    },
  },
});

export interface SelectProps
  extends Omit<ComponentProps<typeof StyledSelect>, 'children'> {
  options: Array<Option>;
  emptyText: string;
  value: string;
  error?: boolean;
}

const Select = ({ options, emptyText, ...props }: SelectProps) => (
  <StyledSelect {...props} defaultValue="">
    {!props.value && <option value="">{emptyText}</option>}
    {options.map(({ value, text }) => (
      <option key={value} value={value}>
        {text}
      </option>
    ))}
  </StyledSelect>
);

export default Select;
