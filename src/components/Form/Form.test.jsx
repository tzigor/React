import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Form', () => {
  it('render ompoment', () => {
    render(<Form />);
    expect(Form).toBeInstanceOf(Function);
  });

  it('input change with fireevent', () => {
    render(<Form />);
    const input =
      (screen.getByTestId < HTMLInputElement) | (HTMLTextAreaElement > 'input');
    console.log(input);
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });
});
