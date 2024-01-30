import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import ConfirmRemove from '../../components/ConfirmRemove';

describe('Test ConfirmRemove component', () => {
  const mockRemove = vi.fn();
  const mockCancle = vi.fn();

  it('Handle remove function', () => {
    render(<ConfirmRemove resourceName="note" onRemove={mockRemove} />);
    const removeButton = screen.getByRole('button', { name: 'Remove' });

    fireEvent.click(removeButton);
    expect(mockRemove).toBeCalled();
  });

  it('Handle cancle function', () => {
    render(
      <ConfirmRemove
        resourceName="note"
        onRemove={mockRemove}
        onCloseModal={mockCancle}
      />,
    );
    const cancleButton = screen.getByRole('button', { name: 'Cancle' });

    fireEvent.click(cancleButton);
    expect(mockCancle).toBeCalled();
  });

  it('Display note title', () => {
    render(<ConfirmRemove resourceName="note" onRemove={mockRemove} />);
    const paragraphElement = screen.getByText('note', { exact: false });
    expect(paragraphElement.textContent).toBe(
      "Are you sure you want to delete this note permanently? This action can't be undone.",
    );
  });

  it('Display "" title', () => {
    render(<ConfirmRemove onRemove={mockRemove} />);
    const paragraphElement = screen.getByText(
      "Are you sure you want to delete this permanently? This action can't be undone.",
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
