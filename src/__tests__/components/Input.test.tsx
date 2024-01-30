import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from '../../components/Input';
import React, { ChangeEventHandler, useState } from 'react';
import { act } from 'react-dom/test-utils';

describe('Heading', () => {
  const setState = vi.fn();
  it('Test placeholder in Input', () => {
    render(
      <Input
        placeHolder="Input placeholder"
        value="Text in input"
        onChange={setState}
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
        onChange={setState}
      />,
    );

    const InputElement = screen.getByDisplayValue('Text in input');
    expect(InputElement).toBeInTheDocument();
  });

  it('Test onChange, texting in Input', () => {
    const { result } = renderHook(() => {
      const [inputText, setInputText] = useState('Text in input');
      return { inputText, setInputText };
    });

    render(
      <Input
        placeHolder="Input placeholder"
        value={result.current.inputText}
        onChange={(e) => result.current.setInputText(e.target.value)}
      />,
    );

    const inputElement: HTMLInputElement =
      screen.getByDisplayValue('Text in input');

    act(() => {
      fireEvent.change(inputElement, { target: { value: 't' } });
    });

    act(() => {
      fireEvent.change(inputElement, { target: { value: 'te' } });
    });

    expect(result.current.inputText).toBe('te');
  });
});
