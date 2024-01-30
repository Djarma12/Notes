import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '../../components/Header';

describe('Header', () => {
  it('Display children component', async () => {
    render(
      <Header>
        <h1>Children component</h1>
      </Header>,
    );

    const h1Element = screen.getByText('Children component');
    expect(h1Element).toBeInTheDocument();
  });
});
