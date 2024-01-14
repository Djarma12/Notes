import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TextArea from '../../components/TextArea';

describe('Heading', () => {
  const ref: { current: HTMLTextAreaElement | null } = { current: null };

  it('Test placeholder in textarea', () => {
    render(<TextArea placeHolder="This is text area" />);

    const textAreaElement = screen.getByPlaceholderText('This is text area');
    expect(textAreaElement).toBeInTheDocument();
  });

  it('Test text in textarea', () => {
    render(
      <TextArea placeHolder="This is text area" defaultValue="Default value" />,
    );

    const textAreaElement = screen.getByDisplayValue('Default value');
    expect(textAreaElement).toBeInTheDocument();
  });

  // Test ref
  it('Test ref in textarea when does not exist defaultValue', () => {
    render(<TextArea placeHolder="This is text area" textAreaRef={ref} />);

    expect(ref.current?.value).toBe('');
  });

  it('Test ref in textarea when exists defaultValue', () => {
    render(
      <TextArea
        placeHolder="This is text area"
        defaultValue="Default value"
        textAreaRef={ref}
      />,
    );

    expect(ref.current?.value).toBe('Default value');
  });
});
