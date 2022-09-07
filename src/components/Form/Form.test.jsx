import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form } from './Form';

describe('Form', () => {
  it('is a Compoment', () => {
    render(<Form />);
    expect(Form).toBeInstanceOf(Function);
  });
  describe('functionality', () => {

    it('render component with text', () => {
      render(<Form />);
      expect(screen.getByText(/Send message/)).toBeInTheDocument();
    });

    it('render multiply components', () => {
      render(
        <>
          <Form />
          <Form />
        </>
      );
      expect(screen.queryAllByText(/Send message/).length).toBe(2);
    });

    it('form is visible', () => {
      render(<Form />);
      expect(screen.getByTestId('formBox')).toBeVisible()
    });

  });
})
