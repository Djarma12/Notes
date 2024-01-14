import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from '../../components/Input';

describe('Heading', () => {
  const handleChange = vi.fn();
  it('Test placeholder in Input', () => {
    render(
      <Input
        placeHolder="Input placeholder"
        value="Text in input"
        onChange={handleChange}
      />,
    );

    const InputElement = screen.getByPlaceholderText('Input placeholder');
    expect(InputElement).toBeInTheDocument();
  });

  it('Test defaultValue in Input', () => {
    render(
      <Input
        placeHolder="This is text area"
        value="Text in input"
        onChange={handleChange}
      />,
    );

    const InputElement = screen.getByDisplayValue('Text in input');
    expect(InputElement).toBeInTheDocument();
  });

  it('Test onChange in Input', () => {
    render(
      <Input
        placeHolder="Input placeholder"
        value="Text in input"
        onChange={(e) => handleChange(e.target.value)}
      />,
    );

    const inputElement: HTMLInputElement =
      screen.getByDisplayValue('Text in input');

    fireEvent.change(inputElement, { target: { value: 't' } });
    fireEvent.change(inputElement, { target: { value: 'te' } });

    expect(handleChange).toHaveBeenCalledTimes(2);
    // expect(inputElement.value).toBe('te');
  });
});
