import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Modal from '../../components/Modal';

describe('Main', () => {
  it('Opens and closes the modal window', () => {
    render(
      <Modal>
        <Modal.Open opens="note">
          <button>Open Modal</button>
        </Modal.Open>
        <Modal.Window name="note">
          <div>Modal Content</div>
        </Modal.Window>
      </Modal>,
    );

    expect(screen.queryByText('Modal Content')).toBeNull();

    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByText('Modal Content')).toBeInTheDocument();

    fireEvent.click(screen.getByText('✖'));
    expect(screen.queryByText('Modal Content')).toBeNull();
  });
});
