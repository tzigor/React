import { Button } from './Button';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button>test</Button>);
  });

  it('render multiply buttons', () => {
    render(
      <>
        <Button>test</Button>
        <Button>test</Button>
      </>
    );
    expect(screen.queryAllByRole('button')).toHaveLength(2);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button label="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('button async click', async () => {
    const mockHandler = jest.fn();
    render(<Button click={() => setTimeout(mockHandler, 1500)}>test</Button>);

    await userEvent.click(screen.getByText(/Send/));

    await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
      timeout: 1600,
    });

    // await screen.findByText('Clicked twice', { timeout: 1000 });
  });
});
