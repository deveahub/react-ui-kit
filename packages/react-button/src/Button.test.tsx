import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('hello', () => {
    const { debug } = render(<Button />);

    debug();
    expect(1).toBe(1);
  });
});
