import React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from '.';

describe('Box', () => {
  it('renders primary variant', () => {
    render(<Box>This is box</Box>);
    expect(screen.getByText(/this is box/i)).toBeDefined();
  });
});
