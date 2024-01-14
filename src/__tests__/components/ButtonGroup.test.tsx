import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ButtonGroup from '../../components/ButtonGroup';

describe('ButtonGroup, render children elements', () => {
  it('loads and displays greeting', async () => {
    render(
      <ButtonGroup>
        <button>Children button 1</button>
        <button>Children button 2</button>
      </ButtonGroup>,
    );

    const firstButton = screen.getByRole('button', {
      name: 'Children button 1',
    });
    expect(firstButton).toBeInTheDocument();
    const secondButton = screen.getByRole('button', {
      name: 'Children button 1',
    });
    expect(secondButton).toBeInTheDocument();
  });
});
