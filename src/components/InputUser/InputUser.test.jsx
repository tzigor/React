import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { InputUser } from './InputUser';

describe('InputUser', () => {
    it('render ompoment', () => {
        render(<InputUser />);
        // expect(InputUser).toBeInstanceOf(Function);
    });

    // it('input change with fireevent', () => {
    //     const addMessage = jest.fn();
    //     render(<InputUser addMessage={addMessage} />);
    //     const input = screen.getByTestId < HTMLInputElement > ('input');
    //     console.log(input);
    //     fireEvent.change(input, { target: { value: 'new value' } });
    //     expect(input.value).toBe('new value');
    // });

});
