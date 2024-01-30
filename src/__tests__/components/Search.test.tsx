import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Search from '../../components/Search';

describe('Search box', () => {
  it('Display input in search box', async () => {
    render(
      <Search>
        <input placeholder="Search input" />
      </Search>,
    );

    const inputElement = screen.getByPlaceholderText('Search input');
    expect(inputElement).toBeInTheDocument();
  });
});
