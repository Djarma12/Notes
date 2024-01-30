import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NoteExist, { NoteExistType } from '../../components/NoteExist';
import { MemoryRouter } from 'react-router-dom';
import { NoteType } from '../../context/NoteContext';

const noteDetail: NoteType = {
  id: 1,
  title: 'CompanyXyz',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  tags: [
    { value: 'tag1', label: 'Tag 1' },
    { value: 'tag2', label: 'Tag 2' },
    { value: 'tag3', label: 'Tag 3' },
  ],
};

const MockNoteExists = ({ noteDetailID, children }: NoteExistType) => {
  return (
    <MemoryRouter>
      <NoteExist noteDetailID={noteDetailID}>{children}</NoteExist>
    </MemoryRouter>
  );
};

describe('NoteExists', () => {
  it('Display children component', () => {
    render(
      <MockNoteExists noteDetailID={noteDetail.id}>
        <span>{noteDetail.title}</span>
      </MockNoteExists>,
    );

    const spanElement = screen.getByText('CompanyXyz');
    expect(spanElement).toBeInTheDocument();
  });

  it('Display "Note does not exist" when note does not exist', async () => {
    render(
      <MockNoteExists noteDetailID={undefined}>
        <span>Child content</span>
      </MockNoteExists>,
    );

    const spanElement = screen.getByText('Note does not exist');
    expect(spanElement).toBeInTheDocument();
  });

  it('Handle "Go Back" click', async () => {
    render(
      <MockNoteExists noteDetailID={undefined}>
        <span>Child content</span>
      </MockNoteExists>,
    );

    const buttonElement = screen.getByRole('button', { name: 'Go back' });
    expect(buttonElement).toBeVisible();
    fireEvent.click(buttonElement);
  });

  // it('Calls navigate when "Go back" button is clicked', () => {
  //   const navigateMock = vi.fn();
  //   const { getByText } = render(
  //     <MockNoteExists noteDetailID={undefined}>
  //       <span>Child content</span>
  //     </MockNoteExists>,
  //     {
  //       wrapper: ({ children }) => (
  //         <div onClick={() => navigateMock('/')}>{children}</div>
  //       ),
  //     },
  //   );

  //   fireEvent.click(getByText('Go back'));
  //   expect(navigateMock).toHaveBeenCalledWith('/');
  // });
});
