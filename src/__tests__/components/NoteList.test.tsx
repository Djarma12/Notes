import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NoteList from '../../components/NoteList';

describe('NoteList', () => {
  it('Display children component', async () => {
    render(
      <NoteList>
        <div>Children</div>
      </NoteList>,
    );

    const divElement = screen.getByText('Children');
    expect(divElement).toBeInTheDocument();
  });
});
