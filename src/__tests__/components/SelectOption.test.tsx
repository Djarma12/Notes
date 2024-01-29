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
  beforeEach(() => {
    vi.mock('../../context/NoteContext', () => {
      return {
        useNote: () => {
          return {
            getAllTags: () => [
              { value: 'tag1', label: 'Tag 1' },
              { value: 'tag2', label: 'Tag 2' },
            ],
          };
        },
      };
    });
  });

  afterEach(() => vi.clearAllMocks());

  it('Test SelectOption to be in the document', async () => {
    render(<SelectOption setTags={mockSetTags} />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  it('Test defaulValue', async () => {
    render(<SelectOption setTags={mockSetTags} defaultValue={mockTags} />);

    mockTags.forEach((tag) => {
      const selectOption = screen.getByText(tag.label);
      expect(selectOption).toBeVisible();
    });
  });

  it('Updates tags when an option is selected', async () => {
    render(<SelectOption setTags={mockSetTags} />);

    const selectElement = screen.getByRole('combobox');
    screen.debug();
    fireEvent.click(selectElement);
    screen.debug();

    const tagOption1 = screen.getByText('Tag 1');
    const tagOption2 = screen.getByText('Tag 2');

    fireEvent.click(tagOption1);
    fireEvent.click(tagOption2);

    expect(mockSetTags).toHaveBeenCalledWith([
      { value: 'tag1', label: 'Tag 1' },
      { value: 'tag2', label: 'Tag 2' },
    ]);
  });

  // it('Test onChange', async () => {
  //   const mockTags = [{ value: 'tag1', label: 'Tag 1' }];

  //   render(<SelectOption setTags={mockSetTags} defaultValue={mockTags} />);
  //   const selectElement = screen.getByRole('combobox');

  //   fireEvent.change(selectElement, {
  //     target: {
  //       value: [{ value: 'tag4', label: 'Tag 4', __isNew__: true }],
  //     },
  //   });
  //   screen.debug();
  //   const option = screen.getByText('Tag 4');
  //   // expect(mockSetTags).toHaveBeenCalledTimes(1);
  //   expect(option.textContent).toBe('Tag 4');
  //   // expect(mockSetTags).toHaveBeenCalledWith([
  //   //   { value: 'tag1', label: 'Tag 1' },
  //   // ]);
  // });
});
