import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Main from '../../components/Main';

describe('Main', () => {
  it('Display children component', async () => {
    render(
      <Main>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </Main>,
    );

    const liElement = screen.getByText('List item 1');
    expect(liElement).toBeInTheDocument();
  });
});
