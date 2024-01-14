import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import NoteItem from '../../components/NoteItem';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const MookNoteItem = () => {
  return (
    <BrowserRouter>
      <NoteItem
        note={{
          id: 2,
          title: 'Note 1',
          body: 'Note content',
          tags: [
            {
              value: 'tag1',
              label: 'Tag1',
            },
            {
              value: 'tag2',
              label: 'Tag2',
            },
          ],
        }}
      />
    </BrowserRouter>
  );
};

describe('NoteItemTest', () => {
  it('Display note title', () => {
    render(<MookNoteItem />);
    const spanElement = screen.getByText('Note 1');
    expect(spanElement).toBeInTheDocument();
  });

  it('Display note tag 1', () => {
    render(<MookNoteItem />);
    const liElement = screen.getByText('Tag1');
    expect(liElement).toBeInTheDocument();
  });

  it('Display note tag 2', () => {
    render(<MookNoteItem />);
    const liElement = screen.getByText('Tag2');
    expect(liElement).toBeInTheDocument();
  });

  // test('full app rendering/navigating', async () => {
  //   render(<MookNoteItem />);
  //   const user = userEvent.setup();
  //   const spanElement = screen.getByText('Note 1');
  //   // verify page content for default route
  //   expect(spanElement).toBeInTheDocument();

  //   // verify page content for expected route after navigating
  //   await user.click(spanElement);
  //   const paragrafElement = screen.findByText('Note content');
  //   console.log(paragrafElement);
  //   expect(spanElement).toBeCalledWith('/2');
  // });

  // it('Handle click note item', () => {
  //   const mock = vi.fn();
  //   render(<MookNoteItem />);
  //   // const spanElement = screen.getByRole('listitem');

  //   // if (container.firstChild) fireEvent.click(container);
  //   // console.log(container.firstChild);

  //   expect(mock).toBeCalled();
  // });
});
