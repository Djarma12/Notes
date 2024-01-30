import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Heading from '../../components/Heading';

describe('Heading', () => {
  it('Display text in Heading', async () => {
    render(<Heading>H1 component</Heading>);

    const h1Element = screen.getByText('H1 component');
    expect(h1Element).toBeInTheDocument();
  });
});
