import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SelectOption, { SelectValues } from '../../components/SelectOption';

const mockTags: SelectValues[] = [
  { value: 'tag4', label: 'Tag 4' },
  { value: 'tag5', label: 'Tag 5' },
  { value: 'tag6', label: 'Tag 6' },
];

const mockSetTags = vi.fn();

describe('SelectOpiton', () => {
  it('Test Select Option', async () => {
    render(<SelectOption setTags={mockSetTags} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  it('Test Select Option defaulValue', async () => {
    render(<SelectOption setTags={mockSetTags} defaultValue={mockTags} />);

    mockTags.forEach((tag) => {
      const selectOption = screen.getByText(tag.label);
      expect(selectOption).toBeVisible();
    });
  });

  it('Test onChange', async () => {
    const mockSetTags = vi.fn();
    const mockTags = [{ value: 'tag1', label: 'Tag 1' }];

    // Act
    render(<SelectOption setTags={mockSetTags} defaultValue={mockTags} />);
    const selectElement = screen.getByRole('combobox'); // Use screen to get the element

    fireEvent.change(selectElement, {
      target: {
        value: [
          {
            value: 'tag1',
            label: 'Tag 1',
            __isNew__: true,
          },
        ],
      },
    });

    // Assert
    expect(mockSetTags).toHaveBeenCalledTimes(1);
    expect(mockSetTags).toHaveBeenCalledWith([
      { value: 'tag1', label: 'Tag 1' },
    ]);
  });
});
