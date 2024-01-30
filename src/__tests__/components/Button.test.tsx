import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from '../../components/Button';

describe('Button Component', () => {
  it('renders the button with primary variation', () => {
    render(<Button variation="primary">Click me</Button>);

    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'bg-sky-400 hover:bg-sky-600 px-7 py-3 text-xl font-semibold rounded transition text-slate-100',
    );
  });

  it('renders the button with secondary variation', () => {
    render(<Button variation="secondary">Click me</Button>);

    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'bg-gray-50 hover:bg-gray-200 px-7 py-3 text-xl font-semibold rounded transition border',
    );
  });

  it('renders the button with danger variation', () => {
    render(<Button variation="danger">Click me</Button>);

    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      'bg-red-50 hover:bg-red-100 px-7 py-3 text-xl text-red-600 font-semibold rounded transition border border-2 border-red-500',
    );
  });

  it('renders the button with submit type', () => {
    render(
      <Button variation="primary" type="submit">
        Click me
      </Button>,
    );

    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  it('renders the button with submit type', () => {
    render(
      <Button variation="primary" type="reset">
        Click me
      </Button>,
    );

    const buttonElement = screen.getByRole('button', { name: /Click me/i });
    expect(buttonElement).toHaveAttribute('type', 'reset');
  });
});
