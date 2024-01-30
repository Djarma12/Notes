import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NoteTagList from '../../components/NoteTagList';

const tags = [
  { value: 'tag1', label: 'Tag 1' },
  { value: 'tag2', label: 'Tag 2' },
  { value: 'tag3', label: 'Tag 3' },
];

describe('NoteTagList', () => {
  it('Test whether each LI item is displayed correctly under UL', () => {
    render(<NoteTagList tags={tags} />);

    tags.forEach((tag) => {
      expect(screen.getByText(tag.label)).toBeInTheDocument();
    });
  });
});
