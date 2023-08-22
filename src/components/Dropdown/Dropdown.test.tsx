import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

const users = [
  { value: 'mark', label: 'Mark' },
  { value: 'jane', label: 'Jane' },
  { value: 'john', label: 'John' },
];

describe('Dropdown', () => {
  it('should render correctly', () => {
    const { container } = render(<Dropdown options={users} />);
    expect(container).toMatchSnapshot();
  });

  it('should open when clicked on button', async () => {
    render(<Dropdown options={users} />);
    const dropdownButton = screen.getByRole('button');
    await userEvent.click(dropdownButton);
    const dropdownMenu = screen.getByTestId('dropdownItems');
    expect(dropdownMenu).toBeInTheDocument();
  });

  it('should close when clicked on button', async () => {
    render(<Dropdown options={users} />);
    const dropdownButton = screen.getByRole('button');

    await userEvent.click(dropdownButton);
    const dropdownMenu = screen.getByTestId('dropdownItems');
    expect(dropdownMenu).toBeInTheDocument();
    await userEvent.click(dropdownButton);
    expect(dropdownMenu).not.toBeInTheDocument();
  });
});
